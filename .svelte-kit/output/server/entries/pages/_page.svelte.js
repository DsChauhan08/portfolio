import { X as sanitize_props, Y as spread_props, Z as slot, $ as attr, a2 as attr_class, a0 as escape_html, _ as ensure_array_like, a4 as attr_style, a5 as stringify } from "../../chunks/index2.js";
import { P as ProjectTags } from "../../chunks/ProjectTags.js";
import { I as Icon } from "../../chunks/Icon.js";
import { S as Site, K as Kaggle, H as HuggingFace } from "../../chunks/common.js";
import { B as Brand_github } from "../../chunks/brand-github.js";
import { f as formatDate } from "../../chunks/date.js";
import { E as External_link } from "../../chunks/external-link.js";
import { B as Brain } from "../../chunks/brain.js";
import { C as Code } from "../../chunks/code.js";
function Arrow_right($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M5 12l14 0" }],
    ["path", { "d": "M13 18l6 -6" }],
    ["path", { "d": "M13 6l6 6" }]
  ];
  Icon($$renderer, spread_props([
    { type: "outline", name: "arrow-right" },
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
function Feather($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M4 20l10 -10m0 -5v5h5m-9 -1v5h5m-9 -1v5h5m-5 -5l4 -4l4 -4"
      }
    ],
    [
      "path",
      {
        "d": "M19 10c.638 -.636 1 -1.515 1 -2.486a3.515 3.515 0 0 0 -3.517 -3.514c-.97 0 -1.847 .367 -2.483 1m-3 13l4 -4l4 -4"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { type: "outline", name: "feather" },
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
function Star($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { type: "outline", name: "star" },
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
function LinkWithIcon($$renderer, $$props) {
  let { href, text, icon, external = false, class: extraClasses = "" } = $$props;
  const target = external ? "_blank" : void 0;
  const rel = external ? "noopener noreferrer" : void 0;
  $$renderer.push(`<a${attr("href", href)}${attr("target", target)}${attr("rel", rel)}${attr_class(`text-subtext1 hover:text-accent inline-flex items-center gap-1.5 transition-colors duration-200 ${extraClasses}`)}>`);
  if (icon) {
    $$renderer.push("<!--[-->");
    const IconComponent = icon;
    $$renderer.push(`<!---->`);
    IconComponent($$renderer, { size: 18, stroke: 1.5, class: "shrink-0" });
    $$renderer.push(`<!---->`);
  } else {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--> <span>${escape_html(text)}</span></a>`);
}
function Featured($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { projects, maxProjects } = $$props;
    const displayProjects = projects.slice(0, maxProjects);
    if (displayProjects.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<section class="px-4 py-8 md:px-0"><div class="mb-8 flex items-center justify-between"><h2 class="flex items-center gap-3 text-2xl font-semibold md:text-3xl">`);
      Star($$renderer2, { size: 28, class: "text-accent" });
      $$renderer2.push(`<!----> <span>Featured Projects</span></h2> <a href="/projects" class="group text-accent/90 link hidden items-center gap-1 text-sm sm:inline-flex"><span>View all</span> `);
      Arrow_right($$renderer2, {
        size: 14,
        class: "transition-transform duration-200 group-hover:translate-x-0.5"
      });
      $$renderer2.push(`<!----></a></div> <div class="grid grid-cols-1 gap-6 md:grid-cols-2"><!--[-->`);
      const each_array = ensure_array_like(displayProjects);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let project = each_array[$$index];
        $$renderer2.push(`<a${attr("href", `/projects/${project.slug}`)} class="border-surface0 bg-base hover:border-accent focus-visible:border-accent group block overflow-hidden rounded-xl border shadow-lg transition-all duration-300 hover:shadow-xl focus:outline-none">`);
        if (project.metadata.image) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div class="overflow-hidden"><img${attr("src", project.metadata.image.url)}${attr("alt", project.metadata.image.alt)} class="aspect-video w-full transition-transform duration-300 group-hover:scale-105"${attr_style("", {
            "view-transition-name": `project-img-${stringify(project.slug)}`
          })}/></div>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> <div class="space-y-3 p-5"><h3 class="text-text group-hover:text-accent text-xl font-semibold transition-colors"${attr_style("", {
          "view-transition-name": `project-title-${stringify(project.slug)}`
        })}>${escape_html(project.metadata.title)}</h3> <p class="text-subtext0 line-clamp-2 text-sm">${escape_html(project.metadata.description)}</p> `);
        if (project.metadata.tags && project.metadata.tags.length > 0) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div class="flex items-center gap-x-2 pt-1 text-xs">`);
          ProjectTags($$renderer2, { project });
          $$renderer2.push(`<!----></div>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--></div></a>`);
      }
      $$renderer2.push(`<!--]--></div> <div class="mt-6 text-center sm:hidden"><a href="/projects" class="group text-accent inline-flex items-center gap-1 text-sm hover:underline"><span>View all projects</span> `);
      Arrow_right($$renderer2, {
        size: 14,
        class: "transition-transform duration-200 group-hover:translate-x-0.5"
      });
      $$renderer2.push(`<!----></a></div></section>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
const Home = {
  socialLinks: [
    {
      href: Site.out.github,
      text: "GitHub",
      icon: Brand_github
    },
    {
      href: Site.out.kaggle,
      text: "Kaggle",
      icon: Kaggle
    },
    {
      href: Site.out.huggingface,
      text: "HuggingFace",
      icon: HuggingFace
    }
  ]
};
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    $$renderer2.push(`<div class="mx-auto max-w-3xl space-y-12 px-4 py-8 md:py-12"><section class="space-y-4"><h1 class="text-3xl font-bold"><span class="text-accent">Dhananjay Singh Chauhan</span></h1> <p class="text-subtext0 max-w-prose leading-relaxed">Year 12 student. Forensics and blue team enthusiast. I write code like a stoic, configure systems like a monk, and break things like a scientist.</p> <p class="text-subtext1 text-sm">Currently learning: CCNA, CompTIA Security+, Malware Analysis, LLM fine-tuning.</p> <div class="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2"><!--[-->`);
    const each_array = ensure_array_like(Home.socialLinks);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let link = each_array[$$index];
      LinkWithIcon($$renderer2, {
        href: link.href,
        text: link.text,
        icon: link.icon,
        external: true,
        class: "text-sm"
      });
      $$renderer2.push(`<!----> `);
      if (link !== Home.socialLinks[Home.socialLinks.length - 1]) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<span class="text-surface1 text-xs">|</span>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--> <span class="text-surface1 text-xs">|</span> <a href="/about" class="group text-subtext1 hover:text-accent inline-flex items-center gap-1 text-sm transition-colors"><span>More about me</span> `);
    Arrow_right($$renderer2, {
      size: 16,
      class: "transition-transform group-hover:translate-x-0.5"
    });
    $$renderer2.push(`<!----></a></div></section> `);
    Featured($$renderer2, { projects: data.featuredProjects, maxProjects: 3 });
    $$renderer2.push(`<!----> <section class="grid gap-6 md:grid-cols-2"><div class="border-surface0 bg-base rounded-lg border p-4"><div class="mb-3 flex items-center justify-between"><h2 class="text-text flex items-center gap-2 text-sm font-semibold">`);
    Feather($$renderer2, { size: 16, class: "text-accent" });
    $$renderer2.push(`<!----> Poetry</h2> <a href="/poetry" class="text-accent/80 hover:text-accent text-xs">`);
    External_link($$renderer2, { size: 14 });
    $$renderer2.push(`<!----></a></div> `);
    if (data.latestPosts.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<ul class="space-y-1.5 text-sm"><!--[-->`);
      const each_array_1 = ensure_array_like(data.latestPosts.slice(0, 3));
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let post = each_array_1[$$index_1];
        $$renderer2.push(`<li><a${attr("href", "/poetry/" + post.slug)} class="text-subtext0 hover:text-accent flex items-center justify-between gap-2"><span class="truncate">${escape_html(post.metadata.title.text)}</span> `);
        if (post.metadata.published_at) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<span class="text-subtext1 text-xs whitespace-nowrap">${escape_html(formatDate(post.metadata.published_at, { shortMonth: true }))}</span>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--></a></li>`);
      }
      $$renderer2.push(`<!--]--></ul>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<p class="text-subtext1 text-sm italic">Coming soon...</p>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="border-surface0 bg-base rounded-lg border p-4"><div class="mb-3 flex items-center justify-between"><h2 class="text-text flex items-center gap-2 text-sm font-semibold">`);
    Brain($$renderer2, { size: 16, class: "text-accent" });
    $$renderer2.push(`<!----> Keeping Myself Sane</h2> <a href="/philosophy" class="text-accent/80 hover:text-accent text-xs">`);
    External_link($$renderer2, { size: 14 });
    $$renderer2.push(`<!----></a></div> <p class="text-subtext0 text-sm">Thoughts on stoicism, systems thinking, and staying grounded while breaking things.</p> <a href="/philosophy" class="text-accent mt-3 inline-flex items-center gap-1 text-sm hover:underline">Read more `);
    Arrow_right($$renderer2, { size: 14 });
    $$renderer2.push(`<!----></a></div></section> `);
    if (data.commitData?.commits?.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<section class="border-surface0 bg-base rounded-lg border p-4"><div class="mb-3 flex items-center justify-between"><h2 class="text-text flex items-center gap-2 text-sm font-semibold">`);
      Code($$renderer2, { size: 16, class: "text-accent" });
      $$renderer2.push(`<!----> Recent Commits</h2> <a${attr("href", Site.out.github)} target="_blank" rel="noopener noreferrer" class="text-accent/80 hover:text-accent text-xs">`);
      External_link($$renderer2, { size: 14 });
      $$renderer2.push(`<!----></a></div> <ul class="space-y-1.5 text-sm"><!--[-->`);
      const each_array_2 = ensure_array_like(data.commitData.commits.slice(0, 4));
      for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
        let commit = each_array_2[$$index_2];
        $$renderer2.push(`<li><a${attr("href", commit.href)} target="_blank" rel="noopener noreferrer" class="text-subtext0 hover:text-accent flex items-center gap-2"${attr("title", commit.message)}><span class="text-text font-medium">${escape_html(commit.repo.split("/")[1])}:</span> <span class="truncate">${escape_html(commit.message)}</span></a></li>`);
      }
      $$renderer2.push(`<!--]--></ul></section>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
export {
  _page as default
};
