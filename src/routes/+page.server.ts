import type { PageServerLoad } from "./$types";
import { getFeaturedProjects } from "$lib/content/projects";
import { fetchLatestCommits } from "$lib/api/commits";
import { getLatestPoetry } from "$lib/content/poetry";
import { measurePerformance } from "$lib/utils/performance";

const impactPriority = new Map<string, number>([
  ["safenet", 0],
  ["qalpha", 1],
  ["qwen-finance-gguf", 2],
  ["synthetic-finance-data-3m", 3],
  ["easycopy", 4],
  ["sat-stream", 5],
]);

function rankFeaturedProjects(
  projects: Awaited<ReturnType<typeof getFeaturedProjects>>,
) {
  return [...projects].sort((a, b) => {
    const aPriority = impactPriority.get(a.slug) ?? Number.MAX_SAFE_INTEGER;
    const bPriority = impactPriority.get(b.slug) ?? Number.MAX_SAFE_INTEGER;

    if (aPriority !== bPriority) return aPriority - bPriority;

    return +new Date(b.metadata.date) - +new Date(a.metadata.date);
  });
}

export const load: PageServerLoad = async () => {
  // Removed KV/Cloudflare platform binding
  return await measurePerformance("homepage-load-total", async () => {
    const [featuredProjectsRaw, commitData, latestPosts] = await Promise.all([
      measurePerformance("get-featured-projects", () => getFeaturedProjects()),
      fetchLatestCommits(),
      measurePerformance("get-latest-poetry", async () => {
        const poetry = await getLatestPoetry();
        return poetry.filter((p) => p.metadata?.published_at);
      }),
    ]);

    const featuredProjects = rankFeaturedProjects(featuredProjectsRaw);

    return {
      featuredProjects,
      commitData,
      latestPosts,
    };
  });
};
