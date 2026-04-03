import { error } from "@sveltejs/kit";
import type { Component } from "svelte";

export interface ContentEntry<T> {
  slug: string;
  metadata: T;
}

export interface ContentPageData<T> extends ContentEntry<T> {
  content: Component<any>;
}

interface CreateContentServiceOptions<T> {
  modules: Record<string, unknown>;
  contentType: string;
  filter?: (entry: ContentEntry<T>) => boolean;
  sort?: (a: ContentEntry<T>, b: ContentEntry<T>) => number;
  slugFromPath?: (path: string) => string;
}

interface MdsvexModule<T> {
  default: Component<any>;
  metadata?: T;
  frontmatter?: T;
}

type ModuleLoader<T> = MdsvexModule<T> | (() => Promise<MdsvexModule<T>>);

const defaultSlugFromPath = (path: string) =>
  path
    .split("/")
    .pop()!
    .replace(/\.[^.]+$/, "");

function normalizePath(path: string) {
  return path.replace(/\\/g, "/");
}

async function resolveModule<T>(
  loader: ModuleLoader<T>,
): Promise<MdsvexModule<T>> {
  if (typeof loader === "function") {
    return await loader();
  }
  return loader;
}

export function createContentService<T>({
  modules,
  contentType,
  filter = () => true,
  sort = () => 0,
  slugFromPath,
}: CreateContentServiceOptions<T>) {
  const slugResolver = slugFromPath
    ? (path: string) => slugFromPath(normalizePath(path))
    : (path: string) => defaultSlugFromPath(normalizePath(path));

  const entries = Object.entries(modules).map(([path, loader]) => {
    const normalizedPath = normalizePath(path);
    return {
      path: normalizedPath,
      slug: slugResolver(normalizedPath),
      loader: loader as ModuleLoader<T>,
    };
  });

  const loaderBySlug = new Map<
    string,
    { path: string; loader: ModuleLoader<T> }
  >();
  entries.forEach((entry) => loaderBySlug.set(entry.slug, entry));

  const moduleCache = new Map<string, MdsvexModule<T>>();
  let allPromise: Promise<ContentEntry<T>[]> | null = null;
  let cachedAll: ContentEntry<T>[] | null = null;

  const allEager = entries.every(({ loader }) => typeof loader !== "function");

  async function getAll(): Promise<ContentEntry<T>[]> {
    if (cachedAll) {
      return cachedAll;
    }

    if (allPromise) {
      return allPromise;
    }

    if (allEager) {
      const items = entries.map(({ slug, loader, path }) => {
        const module = loader as MdsvexModule<T>;
        moduleCache.set(slug, module);
        const metadata = module.metadata ?? module.frontmatter;
        if (!metadata) {
          throw new Error(`Missing metadata for ${path}`);
        }
        return { slug, metadata };
      });

      cachedAll = items.filter(filter).sort(sort);
      return cachedAll;
    }

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
      }),
    )
      .then((items) => items.filter(filter))
      .then((items) => items.sort(sort));

    return allPromise;
  }

  async function getBySlug(slug: string): Promise<ContentPageData<T>> {
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
      content: module.default,
    };
  }

  async function getLatest(count: number): Promise<ContentEntry<T>[]> {
    const all = await getAll();
    return all.slice(0, count);
  }

  return {
    getAll,
    getBySlug,
    getLatest,
  };
}
