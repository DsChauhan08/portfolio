import * as server from '../entries/pages/projects/_page.server.ts.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/projects/+page.server.ts";
export const imports = ["_app/immutable/nodes/9.CH0TJhzE.js","_app/immutable/chunks/DdQo10ER.js","_app/immutable/chunks/DOG9RXJT.js","_app/immutable/chunks/WBBUDRrx.js","_app/immutable/chunks/Bb8ozoQW.js"];
export const stylesheets = [];
export const fonts = [];
