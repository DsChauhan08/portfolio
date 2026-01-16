import { X as sanitize_props, Y as spread_props, Z as slot, a6 as head, _ as ensure_array_like, $ as attr, a4 as attr_style, a5 as stringify, a0 as escape_html } from "../../../chunks/index2.js";
import { f as formatDate } from "../../../chunks/date.js";
import { P as ProjectTags } from "../../../chunks/ProjectTags.js";
import { I as Icon } from "../../../chunks/Icon.js";
function Folders($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M9 3h3l2 2h5a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2"
      }
    ],
    [
      "path",
      {
        "d": "M17 16v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h2"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { type: "outline", name: "folders" },
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
    head("rqn88j", $$renderer2, ($$renderer3) => {
      $$renderer3.push(`<meta name="description" content="A collection of projects by Jason Cameron."/>`);
    });
    $$renderer2.push(`<div class="space-y-8"><h1 class="mb-8 flex items-center gap-3 text-3xl font-bold">`);
    Folders($$renderer2, { size: 30, class: "text-accent" });
    $$renderer2.push(`<!----> <span>Projects</span></h1> `);
    if (data.projects.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"><!--[-->`);
      const each_array = ensure_array_like(data.projects);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let project = each_array[$$index];
        $$renderer2.push(`<a${attr("href", `/projects/${project.slug}`)} class="border-surface0 bg-base hover:border-accent group block space-y-3 rounded-xl border p-5 shadow-lg transition-colors duration-200">`);
        if (project.metadata.image) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<img${attr("src", project.metadata.image.url)}${attr("alt", project.metadata.image.alt)} class="mb-4 aspect-video w-full rounded-md"${attr_style("", {
            "view-transition-name": `project-img-${stringify(project.slug)}`
          })}/>`);
        } else {
          $$renderer2.push("<!--[!-->");
          $$renderer2.push(`<div class="bg-surface2 mb-4 aspect-video w-full rounded-md"></div>`);
        }
        $$renderer2.push(`<!--]--> <div class="flex items-center justify-between gap-3 pe-3"><h2 class="text-text group-hover:text-accent min-w-0 flex-1 truncate text-xl font-semibold"${attr_style("", {
          "view-transition-name": `project-title-${stringify(project.slug)}`
        })}>${escape_html(project.metadata.title)}</h2> <p class="text-overlay1 flex-shrink-0 text-xs whitespace-nowrap">${escape_html(formatDate(project.metadata.date))}</p></div> <p class="text-subtext0 line-clamp-3 text-sm">${escape_html(project.metadata.description)}</p> `);
        ProjectTags($$renderer2, { project });
        $$renderer2.push(`<!----></a>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<p class="text-subtext1">No projects published yet.</p>`);
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
export {
  _page as default
};
