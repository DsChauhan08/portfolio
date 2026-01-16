import { a as getAllPoetry, b as getPoetryBySlug } from "../../../../chunks/poetry.js";
import { a as createContentPage } from "../../../../chunks/pagemeta.js";
const { prerender, entries, load } = createContentPage({
  getAll: getAllPoetry,
  getBySlug: getPoetryBySlug
});
export {
  entries,
  load,
  prerender
};
