import { _ as ensure_array_like, a2 as attr_class, a4 as attr_style, a0 as escape_html } from "./index2.js";
import { a as accentColorNames } from "./theme.js";
import { T as Tag } from "./date.js";
function PostTags($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { post, showIcon = true, colored = true } = $$props;
    function hashCode(str) {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0;
      }
      return Math.abs(hash);
    }
    const colorHash = post.metadata.title?.hash || post.slug;
    const tagColors = post.metadata.tags?.reduce(
      (acc, tag, index) => {
        const hash = hashCode(colorHash + tag);
        acc[tag] = accentColorNames[hash % accentColorNames.length];
        return acc;
      },
      {}
    ) || {};
    if (post.metadata.tags && post.metadata.tags.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="flex max-h-8 flex-wrap gap-2 overflow-hidden pt-2 text-xs">`);
      if (showIcon) {
        $$renderer2.push("<!--[-->");
        Tag($$renderer2, { size: 18 });
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> <!--[-->`);
      const each_array = ensure_array_like(post.metadata.tags);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let tag = each_array[$$index];
        $$renderer2.push(`<span${attr_class("tag bg-surface0 rounded px-2 py-1 font-semibold", void 0, { "text-subtext0": !colored })}${attr_style(colored ? `color: var(--color-${tagColors[tag]});` : "")}>${escape_html(tag)}</span>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
export {
  PostTags as P
};
