import { g as getAllPosts } from "../../../chunks/posts.js";
import { c as createListingPage } from "../../../chunks/pagemeta.js";
const { load } = createListingPage(getAllPosts, "posts");
export {
  load
};
