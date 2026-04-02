import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.BuYU3D6T.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/DopmzzQP.js","_app/immutable/chunks/uADJdpBP.js","_app/immutable/chunks/DvTFAjPq.js","_app/immutable/chunks/B6aMcIki.js","_app/immutable/chunks/BGy_o2Tx.js","_app/immutable/chunks/DFeQMqI8.js","_app/immutable/chunks/By7T8XCg.js","_app/immutable/chunks/DAevgu2Y.js","_app/immutable/chunks/CEmY4LHA.js","_app/immutable/chunks/XN503S8d.js","_app/immutable/chunks/DG-Ui0H5.js","_app/immutable/chunks/cFWsUcE0.js","_app/immutable/chunks/CrP-JXG3.js","_app/immutable/chunks/Cb18MEfx.js","_app/immutable/chunks/BqEuffcC.js","_app/immutable/chunks/kY078KQX.js","_app/immutable/chunks/B7b-Rd6A.js","_app/immutable/chunks/Byu1nzQn.js"];
export const stylesheets = [];
export const fonts = [];
