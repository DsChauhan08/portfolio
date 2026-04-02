import { S as Site } from "./common.js";
const createRedirects = (config) => {
  const redirects2 = {};
  config.forEach(({ paths, url }) => {
    const pathArray = Array.isArray(paths) ? paths : [paths];
    pathArray.forEach((path) => {
      if (path !== "/" && path.endsWith("/")) {
        throw new Error(`Path "${path}" should not have a trailing slash`);
      } else if (!path.startsWith("/")) {
        throw new Error(`Path "${path}" should start with a leading slash`);
      }
      redirects2[path] = url;
    });
  });
  return redirects2;
};
const redirects = createRedirects([
  { paths: ["/github", "/gh"], url: Site.out.github },
  { paths: "/kaggle", url: Site.out.kaggle },
  { paths: "/huggingface", url: Site.out.huggingface },
  { paths: "/repo", url: Site.repo.url }
]);
const handle = async ({ event, resolve }) => {
  const url = event.url.pathname.replace(/\/$/, "");
  const redirectTo = redirects[url];
  if (redirectTo) {
    console.log("[REDIRECTS] Handling redirect for:", url);
    return new Response(null, {
      status: 302,
      headers: { Location: redirectTo }
    });
  }
  return resolve(event);
};
export {
  handle
};
