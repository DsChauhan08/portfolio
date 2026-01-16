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
const poetryService = createContentService({
  modules: /* @__PURE__ */ Object.assign({ "/content/poetry/first-poem/+page.svx": () => import("./_page.js") }),
  contentType: "poetry",
  slugFromPath: (path) => {
    const cleaned = path.replace(/\/\+page\.svx$/, "");
    return cleaned.substring(cleaned.lastIndexOf("/") + 1);
  },
  filter: (entry) => isPublished(entry),
  sort: (a, b) => getSortValue(b) - getSortValue(a)
});
const getAllPoetry = poetryService.getAll;
const getPoetryBySlug = poetryService.getBySlug;
const POETRY_COUNT = 4;
const getLatestPoetry = () => poetryService.getLatest(POETRY_COUNT);
export {
  getAllPoetry as a,
  getPoetryBySlug as b,
  getLatestPoetry as g
};
