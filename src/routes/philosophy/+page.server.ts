import { getAllPhilosophy } from '$lib/content/philosophy';
import { createListingPage } from '$lib/utils/pagemeta';

export const { load } = createListingPage(getAllPhilosophy, 'philosophy');
