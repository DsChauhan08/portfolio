import { getAllPoetry } from '$lib/content/poetry';
import { createListingPage } from '$lib/utils/pagemeta';

export const { load } = createListingPage(getAllPoetry, 'poetry');
