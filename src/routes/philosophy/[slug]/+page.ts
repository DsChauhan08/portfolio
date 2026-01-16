import { getAllPhilosophy, getPhilosophyBySlug } from '$lib/content/philosophy';
import { createContentPage } from '$lib/utils/pagemeta';

const { entries, load } = createContentPage({
	getAll: getAllPhilosophy,
	getBySlug: getPhilosophyBySlug
});

export const prerender = false;
export { entries, load };
