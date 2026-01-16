import { X as sanitize_props, Y as spread_props, Z as slot, a6 as head, $ as attr, a4 as attr_style, a5 as stringify, a0 as escape_html, _ as ensure_array_like } from "../../../../chunks/index2.js";
import { p as page } from "../../../../chunks/index3.js";
import { f as formatDate } from "../../../../chunks/date.js";
import { b as getIconByName } from "../../../../chunks/projects.js";
/* empty css                         */
import { P as ProjectTags } from "../../../../chunks/ProjectTags.js";
import { I as Icon } from "../../../../chunks/Icon.js";
function Calendar_event($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"
      }
    ],
    ["path", { "d": "M16 3l0 4" }],
    ["path", { "d": "M8 3l0 4" }],
    ["path", { "d": "M4 11l16 0" }],
    ["path", { "d": "M8 15h2v2h-2z" }]
  ];
  Icon($$renderer, spread_props([
    { type: "outline", name: "calendar-event" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
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
        const Icon2 = getIconByName(link.icon || (link.text.toLowerCase().includes("github") ? "github" : "external"));
        $$renderer2.push(`<a${attr("href", link.url)}${attr("title", link.text)} target="_blank" rel="noopener noreferrer" class="group hover:text-accent flex items-center gap-1.5 transition-colors"><!---->`);
        Icon2($$renderer2, {
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
