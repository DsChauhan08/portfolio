import * as server from '../entries/pages/philosophy/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/philosophy/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/philosophy/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.COuc4Sgs.js","_app/immutable/chunks/DdQo10ER.js","_app/immutable/chunks/DOG9RXJT.js","_app/immutable/chunks/CCfCZ19i.js","_app/immutable/chunks/Bb8ozoQW.js"];
export const stylesheets = [];
export const fonts = [];
