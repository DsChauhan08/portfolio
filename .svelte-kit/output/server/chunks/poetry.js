import "clsx";
import { c as createContentService } from "./factory.js";
const metadata = {
  "title": { "text": "Digital Autumn" },
  "description": "A reflection on systems and cycles",
  "published_at": "2026-01-15",
  "tags": ["systems", "nature", "code"]
};
const { title, description, published_at, tags } = metadata;
function _page_svx($$renderer) {
  $$renderer.push(`<h1 id="digital-autumn"><a class="sec-anchor" href="#digital-autumn">Digital Autumn</a></h1> <p>Leaves of logic fall through silicon trees,
each bit a season passing, memory released.
The kernel hums its eternal song,
while processes dance, then move along.</p> <p>In registers cold, warmth still resides—
the human touch that code still hides.
We build in winter, plant in spring,
and in the autumn, watch data sing.</p>`);
}
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _page_svx,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
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
  modules: /* @__PURE__ */ Object.assign({ "/content/poetry/first-poem/+page.svx": __vite_glob_0_0 }),
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
