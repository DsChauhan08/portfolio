import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.CYQf4I7J.js","_app/immutable/chunks/CvumDFOP.js","_app/immutable/chunks/Ui87Q5E8.js","_app/immutable/chunks/Ih14E3-_.js","_app/immutable/chunks/DUnRrMTe.js","_app/immutable/chunks/CJtJNkFO.js","_app/immutable/chunks/dbhkUTZZ.js"];
export const stylesheets = ["_app/immutable/assets/0.C7aTUZus.css"];
export const fonts = [];
