import { getAllPhilosophy, getPhilosophyBySlug } from '$lib/content/philosophy';
import { createContentPage } from '$lib/utils/pagemeta';

const { prerender, entries, load } = createContentPage({
	getAll: getAllPhilosophy,
	getBySlug: getPhilosophyBySlug
});

export { prerender, entries, load };
