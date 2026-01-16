import { getAllPoetry, getPoetryBySlug } from '$lib/content/poetry';
import { createContentPage } from '$lib/utils/pagemeta';

const { entries, load } = createContentPage({
	getAll: getAllPoetry,
	getBySlug: getPoetryBySlug
});

export const prerender = false;
export { entries, load };
