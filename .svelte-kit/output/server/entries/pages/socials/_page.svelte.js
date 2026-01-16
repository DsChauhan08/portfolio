import { a6 as head, _ as ensure_array_like, $ as attr, a0 as escape_html } from "../../../chunks/index2.js";
import { a as Socials } from "../../../chunks/common.js";
import { E as External_link } from "../../../chunks/external-link.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    head("pmux9f", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Connect with Jason Cameron | Social Links</title>`);
      });
      $$renderer3.push(`<meta name="description" content="Connect with Jason Cameron on various social platforms - GitHub, LinkedIn, X, Bluesky, Instagram, and WakaTime."/>`);
    });
    $$renderer2.push(`<div class="mx-auto max-w-4xl px-4 py-6 sm:px-6 md:py-12"><div class="mb-8 text-center"><p class="text-subtext0 text-base leading-relaxed md:text-lg">Find me across the web. Let's build something together.</p></div> <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"><!--[-->`);
    const each_array = ensure_array_like(Socials);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let social = each_array[$$index];
      const Icon = social.icon;
      $$renderer2.push(`<a${attr("href", social.url)} target="_blank" rel="noopener noreferrer" class="group border-surface0 bg-base hover:border-accent/30 focus:border-accent/50 focus:ring-accent/20 relative overflow-hidden rounded-xl border p-6 shadow-lg transition-all duration-300 hover:shadow-xl focus:ring-2 focus:outline-none active:scale-[0.98]"${attr("aria-label", `Visit ${social.label}`)}><div class="from-accent/5 absolute inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div> <div class="relative z-10"><div class="mb-4 flex items-center justify-between"><div class="bg-surface0 group-hover:bg-accent/10 flex h-12 w-12 items-center justify-center rounded-lg transition-colors duration-300">`);
      Icon($$renderer2, {
        class: "text-accent h-6 w-6 transition-transform duration-300 group-hover:scale-110"
      });
      $$renderer2.push(`<!----></div> `);
      External_link($$renderer2, {
        class: "text-subtext1 h-4 w-4 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
      });
      $$renderer2.push(`<!----></div> <div class="mb-2"><h3 class="text-text group-hover:text-accent text-lg font-semibold transition-colors duration-300">${escape_html(social.label)}</h3></div> <div class="text-subtext0 flex items-center text-sm"><span class="truncate font-mono">`);
      if (social.url.includes("github.com")) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`@${escape_html(social.url.split("/").pop())}`);
      } else {
        $$renderer2.push("<!--[!-->");
        if (social.url.includes("x.com") || social.url.includes("twitter.com")) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`@${escape_html(social.url.split("/").pop())}`);
        } else {
          $$renderer2.push("<!--[!-->");
          if (social.url.includes("linkedin.com/in/")) {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`${escape_html(social.url.split("/in/")[1]?.replace("/", ""))}`);
          } else {
            $$renderer2.push("<!--[!-->");
            if (social.url.includes("instagram.com")) {
              $$renderer2.push("<!--[-->");
              $$renderer2.push(`@${escape_html(social.url.split("/").filter(Boolean).pop())}`);
            } else {
              $$renderer2.push("<!--[!-->");
              if (social.url.includes("bsky.app")) {
                $$renderer2.push("<!--[-->");
                $$renderer2.push(`@${escape_html(social.url.split("/profile/")[1] || social.url.split("/").pop())}`);
              } else {
                $$renderer2.push("<!--[!-->");
                if (social.url.includes("wakatime.com")) {
                  $$renderer2.push("<!--[-->");
                  $$renderer2.push(`@${escape_html(social.url.split("/@")[1] || social.url.split("/").pop())}`);
                } else {
                  $$renderer2.push("<!--[!-->");
                  $$renderer2.push(`${escape_html(new URL(social.url).hostname)}`);
                }
                $$renderer2.push(`<!--]-->`);
              }
              $$renderer2.push(`<!--]-->`);
            }
            $$renderer2.push(`<!--]-->`);
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]--></span></div></div> <div class="bg-accent absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full"></div></a>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="mt-12 text-center"><p class="text-subtext1 text-sm">Prefer email? Reach out at <a href="mailto:hi@jasoncameron.dev" class="link text-accent font-medium hover:underline">hi@jasoncameron.dev</a></p></div></div>`);
  });
}
export {
  _page as default
};
