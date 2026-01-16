import { c as createContentService } from "./factory.js";
const draftSortFallback = Number.MIN_SAFE_INTEGER;
const parsePublishedAt = (value) => {
  if (!value) {
    return null;
  }
  const timestamp = new Date(value).getTime();
  return Number.isNaN(timestamp) ? null : timestamp;
};
const getSortValue = (entry) => parsePublishedAt(entry.metadata.published_at) ?? draftSortFallback;
const isPublished = (entry) => parsePublishedAt(entry.metadata.published_at) !== null;
const philosophyService = createContentService({
  modules: /* @__PURE__ */ Object.assign({}),
  contentType: "philosophy",
  slugFromPath: (path) => {
    const cleaned = path.replace(/\/\+page\.svx$/, "");
    return cleaned.substring(cleaned.lastIndexOf("/") + 1);
  },
  filter: (entry) => isPublished(entry),
  sort: (a, b) => getSortValue(b) - getSortValue(a)
});
const getAllPhilosophy = philosophyService.getAll;
const getPhilosophyBySlug = philosophyService.getBySlug;
export {
  getPhilosophyBySlug as a,
  getAllPhilosophy as g
};
