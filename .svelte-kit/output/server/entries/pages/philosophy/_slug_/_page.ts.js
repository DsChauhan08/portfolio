import { g as getAllPhilosophy, a as getPhilosophyBySlug } from "../../../../chunks/philosophy.js";
import { a as createContentPage } from "../../../../chunks/pagemeta.js";
const { prerender, entries, load } = createContentPage({
  getAll: getAllPhilosophy,
  getBySlug: getPhilosophyBySlug
});
export {
  entries,
  load,
  prerender
};
