import { g as getAllProjects } from "../../../chunks/projects.js";
import { c as createListingPage } from "../../../chunks/pagemeta.js";
const { load } = createListingPage(getAllProjects, "projects");
export {
  load
};
