import { g as getAllPosts, a as getPostBySlug } from "../../../../chunks/posts.js";
import { a as createContentPage } from "../../../../chunks/pagemeta.js";
const { prerender, entries, load } = createContentPage({
  getAll: getAllPosts,
  getBySlug: getPostBySlug
});
export {
  entries,
  load,
  prerender
};
