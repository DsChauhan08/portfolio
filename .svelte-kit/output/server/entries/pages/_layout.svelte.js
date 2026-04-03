import { e as ensure_array_like, c as attr, d as escape_html, M as Menu_2, P as Palette, f as store_get, g as attr_class, u as unsubscribe_stores, h as attr_style, i as stringify, X, j as head, k as html } from "../../chunks/ui-icons.js";
import { p as page } from "../../chunks/index.js";
import { a as Socials, S as Site } from "../../chunks/common.js";
import { p as paletteNames, P as Palette$1, a as accentColorNames, A as Accent, B as BackgroundEnabled } from "../../chunks/theme.js";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/client.js";
function breadcrumb($$renderer, { text, href = void 0 }) {
  $$renderer.push(`<li class="inline-flex items-center svelte-no9652">`);
  if (href) {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<a class="animation-wiggle hover:text-accent svelte-no9652"${attr("href", href)}>${escape_html(text)}</a>`);
  } else {
    $$renderer.push("<!--[!-->");
    $$renderer.push(`<span aria-current="page" class="svelte-no9652">${escape_html(text)}</span>`);
  }
  $$renderer.push(`<!--]--></li>`);
}
function Breadcrumb($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const breadcrumbs = page.url.pathname.split("/").filter(Boolean).slice(0, 4);
    $$renderer2.push(`<nav aria-label="Breadcrumbs" class="svelte-no9652"><ul class="text-md flex items-center svelte-no9652"><li class="inline-flex items-center svelte-no9652"><a class="animation-wiggle text-accent hover:text-accent/40 svelte-no9652" href="/">~</a></li> <!--[-->`);
    const each_array = ensure_array_like(breadcrumbs);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let text = each_array[i];
      const href = "/" + breadcrumbs.slice(0, i + 1).join("/");
      $$renderer2.push(`<li class="mx-0.5 inline-flex items-center svelte-no9652">/</li> `);
      if (i === breadcrumbs.length - 1) {
        $$renderer2.push("<!--[-->");
        breadcrumb($$renderer2, { text });
      } else {
        $$renderer2.push("<!--[!-->");
        breadcrumb($$renderer2, { text, href });
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--> <li class="mx-0.5 inline-flex items-center svelte-no9652" aria-hidden="true">/</li> <li class="ml-1 inline-flex items-center svelte-no9652"><span class="cursor-blink bg-accent h-4 w-2 svelte-no9652" aria-hidden="true"></span></li></ul></nav>`);
  });
}
const mainNavItems = [
  { title: "About", href: "/about" },
  { title: "Poetry", href: "/poetry" },
  { title: "Projects", href: "/projects" },
  { title: "Philosophy", href: "/philosophy" }
];
const moreNavItems = [
  { title: "Pics", href: "/pics" }
];
function Header($$renderer, $$props) {
  $$renderer.push(`<div class="header sticky top-0 z-10 flex h-24 items-center justify-between p-5 pb-10 select-none svelte-4b3o1e">`);
  Breadcrumb($$renderer);
  $$renderer.push(`<!----> <button class="text-text hover:text-accent rounded p-2 md:hidden" aria-label="Open navigation menu" aria-expanded="false" aria-controls="sidebar-nav">`);
  Menu_2($$renderer, { size: 24 });
  $$renderer.push(`<!----></button> <nav class="hidden items-center space-x-4 md:flex"><!--[-->`);
  const each_array = ensure_array_like(mainNavItems);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let item = each_array[$$index];
    $$renderer.push(`<a${attr("href", item.href)}${attr("target", item.external ? "_blank" : void 0)}${attr("rel", item.external ? "noopener noreferrer" : void 0)} class="text-text hover:text-accent rounded px-3 py-2 text-sm font-medium transition-colors duration-150">${escape_html(item.title)}</a>`);
  }
  $$renderer.push(`<!--]--> <button class="text-text hover:text-accent cursor-pointer rounded px-3 py-2 text-sm font-medium" aria-label="Open more navigation items">More...</button></nav></div>`);
}
function Footer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const year = (/* @__PURE__ */ new Date()).getFullYear();
    $$renderer2.push(`<footer class="bg-crust text-subtext0 border-surface0/20 mx-5 mb-5 flex h-auto flex-col items-center justify-center gap-y-3 rounded-lg border p-5 text-sm md:flex-row md:justify-between md:gap-y-0"><div class="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 md:justify-start"><span class="whitespace-nowrap">© ${escape_html(year)} Dhananjay Singh Chauhan</span></div> <div class="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 md:justify-end"><div class="flex items-center gap-x-3"><!--[-->`);
    const each_array = ensure_array_like(Socials.filter((item) => item.footer));
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      const Icon = item.icon;
      $$renderer2.push(`<a${attr("href", item.url)} target="_blank" rel="noopener noreferrer"${attr("aria-label", item.label)} class="text-subtext1 hover:text-accent transition-colors duration-200"><!---->`);
      Icon($$renderer2, { stroke: 1.5 });
      $$renderer2.push(`<!----></a>`);
    }
    $$renderer2.push(`<!--]--></div></div></footer>`);
  });
}
function ThemeSelector($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    $$renderer2.push(`<h3 class="text-text mb-4 flex items-center gap-2 text-sm font-semibold">`);
    Palette($$renderer2, { size: 16, class: "text-accent" });
    $$renderer2.push(`<!----> Theme</h3> <div class="ring-surface0 relative mb-4 flex flex-wrap items-center justify-center gap-1 rounded-md p-1 ring-1 md:justify-start"><!--[-->`);
    const each_array = ensure_array_like(paletteNames);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let name = each_array[i];
      const isSelected = store_get($$store_subs ??= {}, "$Palette", Palette$1) === name;
      $$renderer2.push(`<button${attr_class(`flex-1 cursor-pointer rounded-[5px] px-2 py-1 text-center text-xs font-medium transition-all duration-300 ${isSelected ? "bg-base text-text ring-accent/70 shadow-sm ring-1 ring-inset" : "text-subtext1 hover:text-subtext0"}`)}>${escape_html(name.charAt(0).toUpperCase() + name.slice(1))}</button>`);
    }
    $$renderer2.push(`<!--]--></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function ColorSelector($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let selectedIndex, row, col;
    selectedIndex = accentColorNames.indexOf(store_get($$store_subs ??= {}, "$Accent", Accent));
    row = Math.floor(selectedIndex / 7);
    col = selectedIndex % 7;
    $$renderer2.push(`<div class="relative grid grid-cols-7 gap-2.5 md:gap-1.5"><!--[-->`);
    const each_array = ensure_array_like(accentColorNames);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let colorName = each_array[i];
      const isSelected = store_get($$store_subs ??= {}, "$Accent", Accent) === colorName;
      $$renderer2.push(`<button${attr("aria-label", `Select ${colorName} accent color`)}${attr("title", colorName.charAt(0).toUpperCase() + colorName.slice(1))}${attr_class(`aspect-square min-h-5 w-full min-w-5 cursor-pointer rounded-md shadow-sm transition-all duration-150 ${isSelected ? "scale-105" : "opacity-80 hover:scale-110 hover:opacity-100"}`)}${attr_style("", { "background-color": `var(--color-${colorName})` })}><span class="sr-only">${escape_html(colorName)}</span></button>`);
    }
    $$renderer2.push(`<!--]--> <div class="ring-offset-base pointer-events-none absolute aspect-square min-h-5 min-w-5 rounded-md ring-2 ring-offset-2 transition-all duration-300 ease-out"${attr_style(` transform: translate(calc(${stringify(col)} * (100% + 0.625rem)), calc(${stringify(row)} * (100% + 0.625rem))); width: calc((100% - 6 * 0.625rem) / 7); color: var(--color-${stringify(store_get($$store_subs ??= {}, "$Accent", Accent))}); --tw-ring-color: currentColor; `)}></div></div> <div class="mt-4 flex items-center"><label class="flex cursor-pointer items-center"><input type="checkbox"${attr("checked", store_get($$store_subs ??= {}, "$BackgroundEnabled", BackgroundEnabled), true)} class="form-checkbox h-4 w-4 rounded text-current" aria-label="Toggle the colorful background on/off"/> <span class="text-subtext0 ml-2 text-sm">Background effect: <span class="text-accent">${escape_html(store_get($$store_subs ??= {}, "$BackgroundEnabled", BackgroundEnabled) ? "on" : "off")}</span></span></label></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Sidebar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let currentPath = page.url.pathname;
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <aside${attr_class(`bg-mantle text-text border-surface0 fixed inset-y-0 right-0 z-40 flex w-64 transform flex-col border-l shadow-xl transition-transform duration-300 ease-in-out ${"translate-x-full"}`)} id="sidebar-nav"><div class="border-surface0 flex h-16 flex-shrink-0 items-center justify-between border-b p-4"><span class="text-accent font-mono text-lg font-semibold">Navigation</span> <button class="text-subtext1 hover:text-red rounded" aria-label="Close navigation menu">`);
    X($$renderer2, { size: 24 });
    $$renderer2.push(`<!----></button></div> <div class="border-surface0 flex-shrink-0 border-b p-4"><div class="pb-1">`);
    ThemeSelector($$renderer2);
    $$renderer2.push(`<!----></div> `);
    ColorSelector($$renderer2);
    $$renderer2.push(`<!----></div> <nav class="flex-1 overflow-y-auto p-4"><ul class="space-y-2" role="list"><!--[-->`);
    const each_array = ensure_array_like(mainNavItems);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      const isActive = !item.external && currentPath === item.href;
      $$renderer2.push(`<li><a${attr("href", item.href)}${attr("target", item.external ? "_blank" : void 0)}${attr("rel", item.external ? "noopener noreferrer" : void 0)} class="hover:bg-surface0 focus:bg-surface1 block rounded p-2 transition-colors duration-150 focus:outline-none"${attr("aria-current", isActive ? "page" : void 0)}>${escape_html(item.title)}</a></li>`);
    }
    $$renderer2.push(`<!--]--> <li><hr class="border-surface1 my-2 border-t"/></li> <li class="text-subtext0 px-2 py-1 text-xs font-semibold tracking-wider uppercase">More</li> <!--[-->`);
    const each_array_1 = ensure_array_like(moreNavItems);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let item = each_array_1[$$index_1];
      const isActive = !item.external && currentPath === item.href;
      $$renderer2.push(`<li><a${attr("href", item.href)}${attr("target", item.external ? "_blank" : void 0)}${attr("rel", item.external ? "noopener noreferrer" : void 0)} class="hover:bg-surface0 focus:bg-surface1 block rounded p-2 transition-colors duration-150 focus:outline-none"${attr("aria-current", isActive ? "page" : void 0)}>${escape_html(item.title)}</a></li>`);
    }
    $$renderer2.push(`<!--]--></ul></nav></aside>`);
  });
}
typeof TextDecoder !== "undefined" ? new TextDecoder() : null;
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { data, children } = $$props;
    let title = [Site.name, ...page.url.pathname.split("/").slice(1)].filter(Boolean).join(" - ");
    head("12qhfyh", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(title)}</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", Site.description)}/> <meta property="og:title"${attr("content", title)}/> <meta property="og:description"${attr("content", Site.description)}/> <meta property="og:type" content="website"/> <meta property="og:url"${attr("content", Site.url + page.url.pathname)}/> <meta property="og:site_name"${attr("content", Site.name)}/> <meta property="og:image"${attr("content", Site.url + "/images/avatar.webp")}/> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:title"${attr("content", title)}/> <meta name="twitter:description"${attr("content", Site.description)}/> <meta name="twitter:image"${attr("content", Site.url + "/images/avatar.webp")}/> <meta name="author"${attr("content", Site.seo.author)}/> <meta name="keywords"${attr("content", Site.tags.join(", "))}/> <meta name="robots" content="index, follow"/> <meta name="theme-color" content="#1e1e2e"/> <link rel="canonical"${attr("href", Site.url + page.url.pathname)}/> <link rel="dns-prefetch" href="https://api.github.com"/> <link rel="preconnect" href="https://api.github.com" crossorigin="anonymous"/> ${html(`<script type="application/ld+json">
		${JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: Site.seo.author,
        url: Site.url,
        description: Site.description,
        birthDate: Site.seo.birthDate,
        sameAs: [Site.out.github, Site.out.kaggle, Site.out.huggingface],
        knowsAbout: [
          "Cybersecurity",
          "Forensics",
          "Blue Team",
          "Rust",
          "C",
          "LLM Fine-tuning",
          "Network Security",
          "NixOS"
        ]
      })}
	<\/script>`)}`);
    });
    $$renderer2.push(`<div class="text-text mx-auto flex min-h-screen max-w-[90%] flex-col md:max-w-[80%]">`);
    Header($$renderer2);
    $$renderer2.push(`<!----> `);
    Sidebar($$renderer2);
    $$renderer2.push(`<!----> <main class="flex-1 px-0 py-8 md:px-5">`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></main> `);
    Footer($$renderer2, { value: data.footerData.value });
    $$renderer2.push(`<!----></div>`);
  });
}
export {
  _layout as default
};
