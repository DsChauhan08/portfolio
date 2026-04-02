import * as server from '../entries/pages/projects/_page.server.ts.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/projects/+page.server.ts";
export const imports = ["_app/immutable/nodes/9.C_vnCXqJ.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/DopmzzQP.js","_app/immutable/chunks/uADJdpBP.js","_app/immutable/chunks/DvTFAjPq.js","_app/immutable/chunks/B6aMcIki.js","_app/immutable/chunks/CiKztQby.js","_app/immutable/chunks/BGy_o2Tx.js","_app/immutable/chunks/cFWsUcE0.js","_app/immutable/chunks/XN503S8d.js","_app/immutable/chunks/CrP-JXG3.js","_app/immutable/chunks/By7T8XCg.js","_app/immutable/chunks/DAevgu2Y.js","_app/immutable/chunks/CEmY4LHA.js","_app/immutable/chunks/DG-Ui0H5.js"];
export const stylesheets = [];
export const fonts = [];
