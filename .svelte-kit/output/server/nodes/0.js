import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.Wc0M_DuD.js","_app/immutable/chunks/DdQo10ER.js","_app/immutable/chunks/OZyHIN01.js","_app/immutable/chunks/CokyIMs0.js","_app/immutable/chunks/B3zgwEe8.js","_app/immutable/chunks/YKw4mqa_.js","_app/immutable/chunks/Bb8ozoQW.js"];
export const stylesheets = ["_app/immutable/assets/0.CFWbOEtx.css"];
export const fonts = [];
