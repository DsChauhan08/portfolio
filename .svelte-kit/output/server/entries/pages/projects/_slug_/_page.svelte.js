import { j as head, c as attr, h as attr_style, i as stringify, d as escape_html, t as Calendar_event, e as ensure_array_like } from "../../../../chunks/ui-icons.js";
import { p as page } from "../../../../chunks/index.js";
import { f as formatDate } from "../../../../chunks/date.js";
import { b as getIconByName } from "../../../../chunks/projects.js";
/* empty css                         */
import { P as ProjectTags } from "../../../../chunks/ProjectTags.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    const Content = data.content;
    head("gygcht", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(data.metadata.title)}</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", data.metadata.description)}/> `);
      if (data.metadata.tags) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<meta name="keywords"${attr("content", data.metadata.tags.join(", "))}/>`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--> <meta property="og:title"${attr("content", data.metadata.title)}/> <meta property="og:description"${attr("content", data.metadata.description)}/> `);
      if (data.metadata.image) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<meta property="og:image"${attr("content", new URL(data.metadata.image.url, page.url.origin).href)}/>`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--> <meta property="og:type" content="article"/> <meta name="twitter:title"${attr("content", data.metadata.title)}/> <meta name="twitter:description"${attr("content", data.metadata.description)}/> `);
      if (data.metadata.image) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<meta name="twitter:image:src"${attr("content", new URL(data.metadata.image.url, page.url.origin).href)}/>`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]-->`);
    });
    $$renderer2.push(`<article class="prose mx-auto mb-6 max-w-prose">`);
    if (data.metadata.image) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="mb-8 rounded-lg md:rounded-xl"><img${attr("src", data.metadata.image.url)}${attr("alt", data.metadata.image.alt)} class="aspect-video rounded-lg md:rounded-xl"${attr_style("", {
        "view-transition-name": `project-img-${stringify(data.slug)}`
      })}/></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <header class="mb-8 space-y-4"><h1 class="text-3xl font-bold md:text-4xl"${attr_style("", {
      "view-transition-name": `project-title-${stringify(data.slug)}`
    })}>${escape_html(data.metadata.title)}</h1> <div class="text-subtext0 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">`);
    if (data.metadata.date) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="flex items-center gap-1.5">`);
      Calendar_event($$renderer2, { size: 16 });
      $$renderer2.push(`<!----> <span>${escape_html(formatDate(data.metadata.date))}</span></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (data.metadata.links && data.metadata.links.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(data.metadata.links);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let link = each_array[$$index];
        const Icon = getIconByName(link.icon || (link.text.toLowerCase().includes("github") ? "github" : "external"));
        $$renderer2.push(`<a${attr("href", link.url)}${attr("title", link.text)} target="_blank" rel="noopener noreferrer" class="group hover:text-accent flex items-center gap-1.5 transition-colors"><!---->`);
        Icon($$renderer2, {
          size: 16,
          class: "transition-transform duration-200 group-hover:scale-120"
        });
        $$renderer2.push(`<!----></a>`);
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div> <div class="text-subtext0 mt-2 flex items-center gap-x-2 text-sm">`);
    ProjectTags($$renderer2, { project: data });
    $$renderer2.push(`<!----></div></header> <hr class="border-surface1 mb-8"/> <!---->`);
    Content($$renderer2, {});
    $$renderer2.push(`<!----></article>`);
  });
}
export {
  _page as default
};
