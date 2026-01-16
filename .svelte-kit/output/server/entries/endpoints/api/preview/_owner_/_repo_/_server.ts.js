const GET = (async ({ params }) => {
  const { owner, repo } = params;
  if (!owner || !repo) {
    return new Response("Owner and repo parameters are required", { status: 400 });
  }
  try {
    const { fetchGitHubRepo } = await import("../../../../../../chunks/github.js");
    const data = await fetchGitHubRepo(owner, repo);
    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error fetching GitHub repository:", error);
    return new Response("Failed to fetch repository data", { status: 500 });
  }
});
export {
  GET
};
