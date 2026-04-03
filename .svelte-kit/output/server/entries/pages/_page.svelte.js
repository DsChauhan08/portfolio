import { c as attr, g as attr_class, d as escape_html, S as Star, A as Arrow_right, e as ensure_array_like, h as attr_style, i as stringify, m as Brand_github, F as Feather, E as External_link, n as Brain } from "../../chunks/ui-icons.js";
import { P as ProjectTags } from "../../chunks/ProjectTags.js";
import { S as Site, K as Kaggle, H as HuggingFace } from "../../chunks/common.js";
import { f as formatDate } from "../../chunks/date.js";
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
      $$renderer2.push(`<!----></a></div> <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"><!--[-->`);
      const each_array = ensure_array_like(displayProjects);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let project = each_array[$$index];
        $$renderer2.push(`<a${attr("href", `/projects/${project.slug}`)} class="border-surface0 bg-base hover:border-accent focus-visible:border-accent group block overflow-hidden rounded-xl border shadow-md transition-all duration-300 hover:shadow-lg focus:outline-none">`);
        if (project.metadata.image) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div class="overflow-hidden"><img${attr("src", project.metadata.image.url)}${attr("alt", project.metadata.image.alt)} class="aspect-video w-full transition-transform duration-300 group-hover:scale-[1.03]"${attr_style("", {
            "view-transition-name": `project-img-${stringify(project.slug)}`
          })}/></div>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> <div class="space-y-2.5 p-4"><h3 class="text-text group-hover:text-accent text-lg font-semibold transition-colors"${attr_style("", {
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
    $$renderer2.push(`<div class="mx-auto max-w-3xl space-y-12 px-4 py-8 md:py-12"><section class="space-y-4"><h1 class="text-3xl font-bold"><span class="text-accent">Dhananjay Singh Chauhan</span></h1> <p class="text-subtext0 max-w-prose leading-relaxed">Year 12 student specializing in cybersecurity, digital forensics, and blue team operations. Focused on secure systems, threat detection, and malware analysis.</p> <p class="text-subtext1 text-sm">Currently learning: CCNA, CompTIA Security+, Malware Analysis, LLM fine-tuning.</p> <div class="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2"><!--[-->`);
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
    Featured($$renderer2, { projects: data.featuredProjects, maxProjects: 6 });
    $$renderer2.push(`<!----> <section class="grid gap-6 md:grid-cols-2"><div class="border-surface0 bg-base rounded-lg border p-4"><div class="mb-3 flex items-center justify-between"><h2 class="text-text flex items-center gap-2 text-sm font-semibold">`);
    Feather($$renderer2, { size: 16, class: "text-accent" });
    $$renderer2.push(`<!----> Poetry</h2> <a href="/poetry" class="text-accent/80 hover:text-accent text-xs" aria-label="Open poetry page">`);
    External_link($$renderer2, { size: 14, "aria-hidden": "true" });
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
    $$renderer2.push(`<!----> Keeping Myself Sane</h2> <a href="/philosophy" class="text-accent/80 hover:text-accent text-xs" aria-label="Open philosophy page">`);
    External_link($$renderer2, { size: 14, "aria-hidden": "true" });
    $$renderer2.push(`<!----></a></div> <p class="text-subtext0 text-sm">Thoughts on philosophy, systems thinking, and personal growth in technology.</p> <a href="/philosophy" class="text-accent mt-3 inline-flex items-center gap-1 text-sm hover:underline">Read philosophy notes `);
    Arrow_right($$renderer2, { size: 14, "aria-hidden": "true" });
    $$renderer2.push(`<!----></a></div></section></div>`);
  });
}
export {
  _page as default
};
