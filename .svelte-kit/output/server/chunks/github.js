async function fetchGitHubRepo(owner, name) {
  try {
    const repoResponse = await fetch(`https://api.github.com/repos/${owner}/${name}`);
    if (!repoResponse.ok) {
      throw new Error(`Failed to fetch repository: ${repoResponse.statusText}`);
    }
    const repoData = await repoResponse.json();
    const contributorsResponse = await fetch(
      `https://api.github.com/repos/${owner}/${name}/contributors?per_page=10`
    );
    if (!contributorsResponse.ok) {
      throw new Error(`Failed to fetch contributors: ${contributorsResponse.statusText}`);
    }
    const contributorsData = await contributorsResponse.json();
    return {
      owner: repoData.owner.login,
      name: repoData.name,
      description: repoData.description || "No description provided",
      stars: repoData.stargazers_count,
      contributors: contributorsData.filter((e) => {
        if (e.type === "Bot") return false;
        return true;
      }).map((contributor) => ({
        avatar_url: contributor.avatar_url,
        username: contributor.login
      }))
    };
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    throw error;
  }
}
export {
  fetchGitHubRepo
};
