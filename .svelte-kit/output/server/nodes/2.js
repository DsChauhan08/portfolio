import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.CE1bH-pI.js","_app/immutable/chunks/CpEqz7ul.js","_app/immutable/chunks/D6BEqjKt.js","_app/immutable/chunks/CelBeEm6.js","_app/immutable/chunks/DvT2td1w.js","_app/immutable/chunks/DByzwxs7.js","_app/immutable/chunks/8b9X9zIg.js","_app/immutable/chunks/iSYQj8Dr.js","_app/immutable/chunks/DCnVbYGX.js","_app/immutable/chunks/J9LnY1sB.js","_app/immutable/chunks/CYPKb0Zd.js","_app/immutable/chunks/DwDvZo5C.js","_app/immutable/chunks/BomPTWaJ.js","_app/immutable/chunks/DOkomnWG.js","_app/immutable/chunks/D_vuPEr_.js","_app/immutable/chunks/DuI_x1Ur.js","_app/immutable/chunks/5K42RFPU.js","_app/immutable/chunks/6_eDYIKv.js","_app/immutable/chunks/7t5Cn0YN.js","_app/immutable/chunks/ByuPmL6u.js"];
export const stylesheets = [];
export const fonts = [];
