// @ts-nocheck
import type { PageServerLoad } from './$types';
import { getFeaturedProjects } from '$lib/content/projects';
import { fetchLatestCommits } from '$lib/api/commits';
import { getLatestPoetry } from '$lib/content/poetry';
import { measurePerformance } from '$lib/utils/performance';

export const load = async () => {
	// Removed KV/Cloudflare platform binding
	return await measurePerformance('homepage-load-total', async () => {
		const [featuredProjects, commitData, latestPosts] = await Promise.all([
			measurePerformance('get-featured-projects', () => getFeaturedProjects()),
			fetchLatestCommits(),
			measurePerformance('get-latest-poetry', async () => {
				const poetry = await getLatestPoetry();
				return poetry.filter((p) => p.metadata?.published_at);
			})
		]);

		return {
			featuredProjects,
			commitData,
			latestPosts
		};
	});
};
;null as any as PageServerLoad;