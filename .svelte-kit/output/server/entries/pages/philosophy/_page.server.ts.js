import { g as getAllPhilosophy } from "../../../chunks/philosophy.js";
import { c as createListingPage } from "../../../chunks/pagemeta.js";
const { load } = createListingPage(getAllPhilosophy, "philosophy");
export {
  load
};
