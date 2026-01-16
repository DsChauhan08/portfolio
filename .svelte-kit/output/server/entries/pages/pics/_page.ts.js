const load = async () => {
  const imageModules = /* @__PURE__ */ Object.assign({});
  const images = Object.entries(imageModules).map(([path, module]) => {
    const filename = path.split("/").pop()?.replace(/\.[^/.]+$/, "") || "";
    return {
      id: filename,
      src: module,
      alt: filename.replace(/[-_]/g, " "),
      path
    };
  });
  images.sort((a, b) => b.id.localeCompare(a.id));
  return { images };
};
const prerender = true;
export {
  load,
  prerender
};
