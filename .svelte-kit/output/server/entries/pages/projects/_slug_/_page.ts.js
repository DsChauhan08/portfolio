import { g as getAllProjects, c as getProjectBySlug } from "../../../../chunks/projects.js";
import { a as createContentPage } from "../../../../chunks/pagemeta.js";
const { prerender, entries, load } = createContentPage({
  getAll: getAllProjects,
  getBySlug: getProjectBySlug
});
export {
  entries,
  load,
  prerender
};
