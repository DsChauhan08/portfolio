import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.BTMXMWqQ.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/DL-IYu9g.js","_app/immutable/chunks/BHzYtxdM.js","_app/immutable/chunks/CDEKRZbE.js","_app/immutable/chunks/BAktbbBW.js","_app/immutable/chunks/B-gtiBAT.js","_app/immutable/chunks/EyJCFt1t.js","_app/immutable/chunks/CnW4CWI0.js","_app/immutable/chunks/COgXYPT9.js","_app/immutable/chunks/yg5tvooQ.js","_app/immutable/chunks/DPeNf-V5.js","_app/immutable/chunks/DtbfvI6e.js","_app/immutable/chunks/CQ57a-RY.js","_app/immutable/chunks/Dl2H6leW.js","_app/immutable/chunks/C-np1APv.js","_app/immutable/chunks/CeUAeeRl.js","_app/immutable/chunks/CV3bgGdM.js","_app/immutable/chunks/BJGY3ox8.js","_app/immutable/chunks/BobqL6A_.js"];
export const stylesheets = [];
export const fonts = [];
