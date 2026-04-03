import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.Cib7wemZ.js","_app/immutable/chunks/DdQo10ER.js","_app/immutable/chunks/WBBUDRrx.js","_app/immutable/chunks/Bb8ozoQW.js","_app/immutable/chunks/YKw4mqa_.js","_app/immutable/chunks/DOG9RXJT.js"];
export const stylesheets = [];
export const fonts = [];
