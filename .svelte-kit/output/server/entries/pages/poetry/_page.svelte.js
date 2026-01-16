import { _ as ensure_array_like, $ as attr, a4 as attr_style, a0 as escape_html, a5 as stringify, a8 as bind_props } from "../../../chunks/index2.js";
import { f as formatDate } from "../../../chunks/date.js";
import { P as PostTags } from "../../../chunks/PostTags.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let data = $$props["data"];
    const words = (title) => title.split(" ");
    const safePath = (slug) => slug.split("/").pop() || slug;
    function getViewTransitionName(slug, word, wordIndex, allWords) {
      const normalized = word.toLowerCase().replace(/[^a-z0-9\s-_]/g, "");
      const previousOccurrences = allWords.slice(0, wordIndex).filter((w) => w.toLowerCase().replace(/[^a-z0-9\s-_]/g, "") === normalized).length;
      return `_${safePath(slug)}__${normalized}${previousOccurrences > 0 ? "___" + previousOccurrences : ""}`;
    }
    $$renderer2.push(`<div class="mx-auto max-w-prose px-4 py-8 sm:px-6 lg:px-8"><h1 class="text-text mb-8 text-3xl font-bold tracking-tight">Poetry</h1> `);
    if (data.poetry && data.poetry.length) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="space-y-6"><!--[-->`);
      const each_array = ensure_array_like(data.poetry);
      for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
        let entry = each_array[$$index_1];
        const titleWords = words(entry.metadata.title.text);
        $$renderer2.push(`<a${attr("href", `/poetry/${entry.slug}`)} class="block"><article class="space-y-2"><h2 class="text-text hover:text-accent text-xl font-semibold"><!--[-->`);
        const each_array_1 = ensure_array_like(titleWords);
        for (let i = 0, $$length2 = each_array_1.length; i < $$length2; i++) {
          let word = each_array_1[i];
          $$renderer2.push(`<span${attr_style(`view-transition-name: ${stringify(getViewTransitionName(entry.slug, word, i, titleWords))};`)}>${escape_html(word)}${escape_html(i < titleWords.length - 1 ? " " : "")}</span>`);
        }
        $$renderer2.push(`<!--]--></h2> `);
        if (entry.metadata.published_at) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<p class="text-subtext0 text-xs">${escape_html(formatDate(entry.metadata.published_at))}</p>`);
        } else {
          $$renderer2.push("<!--[!-->");
          $$renderer2.push(`<p class="text-subtext0 text-xs italic">Draft</p>`);
        }
        $$renderer2.push(`<!--]--> <p class="text-subtext1 text-sm">${escape_html(entry.metadata.description)}</p> `);
        PostTags($$renderer2, { post: entry, showIcon: false, colored: false });
        $$renderer2.push(`<!----></article></a>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<p class="text-subtext0">No poems yet.</p>`);
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
