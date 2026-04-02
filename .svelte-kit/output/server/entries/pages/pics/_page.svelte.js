import { a6 as head, a0 as escape_html, _ as ensure_array_like, $ as attr } from "../../../chunks/index2.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    head("153f9re", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Pics | Jason Cameron</title>`);
      });
      $$renderer3.push(`<meta name="description" content="A collection of my photography."/>`);
    });
    $$renderer2.push(`<main class="px-6 pt-0 pb-16 md:px-16"><h1 class="mb-2 text-2xl font-semibold">pics <span aria-label="count of photos" class="text-subtext0 inline-block align-baseline text-sm leading-none font-normal">[${escape_html(data.images.length)}]</span></h1> <p class="text-subtext0 text-sm">photos from around Toronto and beyond. Captured on a Pixel 6, Pixel 8 or a Canon T7</p> <br/> <div class="columns-1 break-inside-avoid gap-x-4 md:columns-2 xl:columns-3"><!--[-->`);
    const each_array = ensure_array_like(data.images);
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let image = each_array[index];
      $$renderer2.push(`<picture class="group mb-4 block cursor-pointer break-inside-avoid overflow-hidden" role="button" tabindex="0">`);
      if (image.src.sources?.avif) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<source${attr("srcset", image.src.sources.avif)} type="image/avif"/>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> `);
      if (image.src.sources?.webp) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<source${attr("srcset", image.src.sources.webp)} type="image/webp"/>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> <img class="block h-auto w-full opacity-0 transition-opacity duration-200 group-hover:opacity-80"${attr("src", image.src.img.src)}${attr("alt", image.alt)} loading="eager"${attr("width", image.src.img.w)}${attr("height", image.src.img.h)} onload="this.__e=event"/></picture>`);
    }
    $$renderer2.push(`<!--]--></div></main> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
export {
  _page as default
};
