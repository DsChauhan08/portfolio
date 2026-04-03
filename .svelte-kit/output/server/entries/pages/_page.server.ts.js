import { a as getFeaturedProjects } from "../../chunks/projects.js";
import { g as getLatestPoetry } from "../../chunks/poetry.js";
const impactPriority = /* @__PURE__ */ new Map([
  ["safenet", 0],
  ["qalpha", 1],
  ["qwen-finance-gguf", 2],
  ["synthetic-finance-data-3m", 3],
  ["easycopy", 4],
  ["sat-stream", 5]
]);
function rankFeaturedProjects(projects) {
  return [...projects].sort((a, b) => {
    const aPriority = impactPriority.get(a.slug) ?? Number.MAX_SAFE_INTEGER;
    const bPriority = impactPriority.get(b.slug) ?? Number.MAX_SAFE_INTEGER;
    if (aPriority !== bPriority) return aPriority - bPriority;
    return +new Date(b.metadata.date) - +new Date(a.metadata.date);
  });
}
const load = async () => {
  const [featuredProjectsRaw, latestPosts] = await Promise.all([
    getFeaturedProjects(),
    getLatestPoetry()
  ]);
  const featuredProjects = rankFeaturedProjects(featuredProjectsRaw);
  return {
    featuredProjects,
    latestPosts
  };
};
const prerender = true;
export {
  load,
  prerender
};
