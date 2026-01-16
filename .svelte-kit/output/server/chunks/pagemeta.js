function createContentPage({
  getAll,
  getBySlug
}) {
  const prerender = true;
  const entries = async () => (await getAll()).map((p) => ({ slug: p.slug }));
  const load = async (event) => getBySlug(event.params.slug);
  return { prerender, entries, load };
}
function createListingPage(getAll, key) {
  const load = async () => ({
    [key]: await getAll()
  });
  return { load };
}
export {
  createContentPage as a,
  createListingPage as c
};
