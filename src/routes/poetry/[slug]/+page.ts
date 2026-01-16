import { getAllPoetry, getPoetryBySlug } from '$lib/content/poetry';
import { createContentPage } from '$lib/utils/pagemeta';

const { prerender, entries, load } = createContentPage({
	getAll: getAllPoetry,
	getBySlug: getPoetryBySlug
});

export { prerender, entries, load };
