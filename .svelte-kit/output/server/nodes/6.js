import * as universal from '../entries/pages/pics/_page.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/pics/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/pics/+page.ts";
export const imports = ["_app/immutable/nodes/6.B3ataLVA.js","_app/immutable/chunks/DdQo10ER.js"];
export const stylesheets = [];
export const fonts = [];
