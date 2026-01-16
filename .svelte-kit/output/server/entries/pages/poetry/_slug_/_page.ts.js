import { a as getAllPoetry, b as getPoetryBySlug } from "../../../../chunks/poetry.js";
import { a as createContentPage } from "../../../../chunks/pagemeta.js";
const { entries, load } = createContentPage({
  getAll: getAllPoetry,
  getBySlug: getPoetryBySlug
});
const prerender = false;
export {
  entries,
  load,
  prerender
};
