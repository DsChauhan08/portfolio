import { a as getAllPoetry } from "../../../chunks/poetry.js";
import { c as createListingPage } from "../../../chunks/pagemeta.js";
const { load } = createListingPage(getAllPoetry, "poetry");
export {
  load
};
