import { a6 as head, a0 as escape_html, a8 as bind_props, $ as attr } from "../../../../chunks/index2.js";
import { f as formatDate } from "../../../../chunks/date.js";
import { S as SlabTitle } from "../../../../chunks/SlabTitle.js";
import { P as PostTags } from "../../../../chunks/PostTags.js";
/* empty css                         */
import "../../../../chunks/client.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let data = $$props["data"];
    const Content = data.content;
    head("1eezspg", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(data.metadata.title.text)}</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", data.metadata.description)}/> `);
      if (data.metadata.tags) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<meta name="keywords"${attr("content", data.metadata.tags.join(", "))}/>`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--> <meta property="og:title"${attr("content", data.metadata.title.text)}/> <meta property="og:description"${attr("content", data.metadata.description)}/> `);
      if (data.metadata.updated_at) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<meta property="article:modified_time"${attr("content", data.metadata.updated_at)}/>`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--> <meta property="og:type" content="article"/> <meta name="twitter:title"${attr("content", data.metadata.title.text)}/> <meta name="twitter:description"${attr("content", data.metadata.description)}/>`);
    });
    $$renderer2.push(`<div class="mx-auto max-w-4xl px-4"><header class="mb-12 space-y-4">`);
    SlabTitle($$renderer2, {
      title: data.metadata.title.text,
      slug: data.slug,
      config: data.metadata.title?.config,
      hash: data.metadata.title?.hash
    });
    $$renderer2.push(`<!----> <p class="text-subtext0 text-sm">`);
    if (data.metadata.published_at) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`${escape_html(formatDate(data.metadata.published_at))}`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`Draft`);
    }
    $$renderer2.push(`<!--]--> `);
    if (data.metadata.updated_at) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`| Updated ${escape_html(formatDate(data.metadata.updated_at))}`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></p> `);
    PostTags($$renderer2, { post: data });
    $$renderer2.push(`<!----></header> <article class="prose mx-auto mb-6 max-w-4xl">`);
    Content($$renderer2, {});
    $$renderer2.push(`<!----></article></div>`);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
