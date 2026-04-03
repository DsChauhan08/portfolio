import * as server from '../entries/pages/poetry/_page.server.ts.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/poetry/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/poetry/+page.server.ts";
export const imports = ["_app/immutable/nodes/7.jqKOW5Ys.js","_app/immutable/chunks/CvumDFOP.js","_app/immutable/chunks/DOG9RXJT.js","_app/immutable/chunks/Dt51Dhc4.js","_app/immutable/chunks/dbhkUTZZ.js"];
export const stylesheets = [];
export const fonts = [];
