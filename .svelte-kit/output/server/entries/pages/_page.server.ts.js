import { a as getFeaturedProjects } from "../../chunks/projects.js";
import { g as getLatestPoetry } from "../../chunks/poetry.js";
async function measurePerformance(name, fn) {
  {
    return await fn();
  }
}
const FALLBACK_RAW = {
  commits: [],
  languages: [],
  stats: { totalAdditions: 0, totalDeletions: 0, totalCommits: 0 }
};
function processResponse(data) {
  const commits = (data.commits || []).map((c) => ({
    repo: c.repo,
    message: c.messageHeadline,
    href: c.commitUrl,
    sha: c.oid,
    date: c.committedDate,
    additions: c.additions,
    deletions: c.deletions
  }));
  const totalAdditions = data.stats?.totalAdditions ?? commits.reduce((acc, c) => acc + (c.additions || 0), 0);
  const totalDeletions = data.stats?.totalDeletions ?? commits.reduce((acc, c) => acc + (c.deletions || 0), 0);
  const totalCommits = data.stats?.totalCommits ?? commits.length;
  return {
    commits,
    languages: data.languages || [],
    totalAdditions,
    totalDeletions,
    totalCommits
  };
}
async function fetchLatestCommits() {
  console.log("[PERF] fetchLatestCommits: fetching from katib...");
  return await refreshCache();
}
async function refreshCache() {
  return await measurePerformance("katib-api-fetch", async () => {
    try {
      const response = await fetch(
        "https://katib.jasoncameron.dev/v2/commits/latest?username=DsChauhan08&limit=5",
        {
          headers: { Accept: "application/json", "User-Agent": "nyx-website/1.0" },
          signal: AbortSignal.timeout(1500)
        }
      );
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const json = await response.json();
      return processResponse(json);
    } catch (err) {
      console.warn("katib fetch failed:", err);
      console.log("Using fallback data after fetch failure");
      return processResponse(FALLBACK_RAW);
    }
  });
}
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
  return await measurePerformance("homepage-load-total", async () => {
    const [featuredProjectsRaw, commitData, latestPosts] = await Promise.all([
      measurePerformance("get-featured-projects", () => getFeaturedProjects()),
      fetchLatestCommits(),
      measurePerformance("get-latest-poetry", async () => {
        const poetry = await getLatestPoetry();
        return poetry.filter((p) => p.metadata?.published_at);
      })
    ]);
    const featuredProjects = rankFeaturedProjects(featuredProjectsRaw);
    return {
      featuredProjects,
      commitData,
      latestPosts
    };
  });
};
export {
  load
};
