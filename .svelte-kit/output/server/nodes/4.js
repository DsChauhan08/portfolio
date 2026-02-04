import * as server from '../entries/pages/philosophy/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/philosophy/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/philosophy/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.C0J8kQJe.js","_app/immutable/chunks/CpEqz7ul.js","_app/immutable/chunks/D6BEqjKt.js","_app/immutable/chunks/DwDvZo5C.js","_app/immutable/chunks/CelBeEm6.js","_app/immutable/chunks/DvT2td1w.js","_app/immutable/chunks/DByzwxs7.js","_app/immutable/chunks/8b9X9zIg.js","_app/immutable/chunks/DCnVbYGX.js","_app/immutable/chunks/J9LnY1sB.js","_app/immutable/chunks/DOkomnWG.js","_app/immutable/chunks/D_vuPEr_.js","_app/immutable/chunks/Sz8XZolJ.js","_app/immutable/chunks/BomPTWaJ.js"];
export const stylesheets = [];
export const fonts = [];
