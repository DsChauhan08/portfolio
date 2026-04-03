import type { PageServerLoad } from "./$types";
import { getFeaturedProjects } from "$lib/content/projects";
import { getLatestPoetry } from "$lib/content/poetry";

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
  // Build static homepage to eliminate runtime server latency
  const [featuredProjectsRaw, latestPosts] = await Promise.all([
    getFeaturedProjects(),
    getLatestPoetry(),
  ]);

  const featuredProjects = rankFeaturedProjects(featuredProjectsRaw);

  return {
    featuredProjects,
    latestPosts,
  };
};

export const prerender = true;
