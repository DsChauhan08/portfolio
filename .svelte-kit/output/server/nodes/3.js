import * as universal from '../entries/pages/about/_page.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/about/+page.ts";
export const imports = ["_app/immutable/nodes/3.eUKjWV7D.js","_app/immutable/chunks/DdQo10ER.js","_app/immutable/chunks/YKw4mqa_.js"];
export const stylesheets = [];
export const fonts = [];
