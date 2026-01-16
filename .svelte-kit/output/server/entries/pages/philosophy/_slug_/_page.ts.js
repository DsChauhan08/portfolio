import { g as getAllPhilosophy, a as getPhilosophyBySlug } from "../../../../chunks/philosophy.js";
import { a as createContentPage } from "../../../../chunks/pagemeta.js";
const { entries, load } = createContentPage({
  getAll: getAllPhilosophy,
  getBySlug: getPhilosophyBySlug
});
const prerender = false;
export {
  entries,
  load,
  prerender
};
