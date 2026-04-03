import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.0AO6PwTV.js","_app/immutable/chunks/CvumDFOP.js","_app/immutable/chunks/CXZLCllN.js","_app/immutable/chunks/BMIlKhl3.js","_app/immutable/chunks/Bi107Npv.js","_app/immutable/chunks/CJtJNkFO.js","_app/immutable/chunks/dbhkUTZZ.js"];
export const stylesheets = ["_app/immutable/assets/0.C7aTUZus.css"];
export const fonts = [];
