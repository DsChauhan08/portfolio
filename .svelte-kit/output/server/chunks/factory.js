import { error } from "@sveltejs/kit";
const defaultSlugFromPath = (path) => path.split("/").pop().replace(/\.[^.]+$/, "");
function normalizePath(path) {
  return path.replace(/\\/g, "/");
}
async function resolveModule(loader) {
  if (typeof loader === "function") {
    return await loader();
  }
  return loader;
}
function createContentService({
  modules,
  contentType,
  filter = () => true,
  sort = () => 0,
  slugFromPath
}) {
  const slugResolver = slugFromPath ? (path) => slugFromPath(normalizePath(path)) : (path) => defaultSlugFromPath(normalizePath(path));
  const entries = Object.entries(modules).map(([path, loader]) => {
    const normalizedPath = normalizePath(path);
    return {
      path: normalizedPath,
      slug: slugResolver(normalizedPath),
      loader
    };
  });
  const loaderBySlug = /* @__PURE__ */ new Map();
  entries.forEach((entry) => loaderBySlug.set(entry.slug, entry));
  const moduleCache = /* @__PURE__ */ new Map();
  let allPromise = null;
  async function getAll() {
    if (!allPromise) {
      allPromise = Promise.all(
        entries.map(async ({ slug, loader, path }) => {
          let module = moduleCache.get(slug);
          if (!module) {
            module = await resolveModule(loader);
            moduleCache.set(slug, module);
          }
          const metadata = module.metadata ?? module.frontmatter;
          if (!metadata) {
            throw new Error(`Missing metadata for ${path}`);
          }
          return { slug, metadata };
        })
      ).then((items) => items.filter(filter)).then((items) => items.sort(sort));
    }
    return allPromise;
  }
  async function getBySlug(slug) {
    const entry = loaderBySlug.get(slug);
    if (!entry) {
      throw error(404, `${contentType} not found: ${slug}`);
    }
    let module = moduleCache.get(slug);
    if (!module) {
      module = await resolveModule(entry.loader);
      moduleCache.set(slug, module);
    }
    const metadata = module.metadata ?? module.frontmatter;
    if (!metadata) {
      throw error(500, `Missing metadata for ${contentType}: ${slug}`);
    }
    const contentEntry = { slug, metadata };
    if (!filter(contentEntry)) {
      throw error(404, `${contentType} not found: ${slug}`);
    }
    return {
      slug,
      metadata,
      content: module.default
    };
  }
  async function getLatest(count) {
    const all = await getAll();
    return all.slice(0, count);
  }
  return {
    getAll,
    getBySlug,
    getLatest
  };
}
export {
  createContentService as c
};
