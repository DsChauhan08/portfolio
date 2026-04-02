import { _ as ensure_array_like, a4 as attr_style, a0 as escape_html, a5 as stringify, a8 as bind_props } from "./index2.js";
import { g as getRandomAccentColor } from "./theme.js";
import { T as Tag } from "./date.js";
function ProjectTags($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let project = $$props["project"];
    const tagColors = project.metadata.tags?.reduce(
      (acc, tag) => {
        acc[tag] = getRandomAccentColor();
        return acc;
      },
      {}
    ) || {};
    if (project.metadata.tags && project.metadata.tags.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="flex max-h-8 flex-wrap gap-2 overflow-hidden pt-2 text-xs">`);
      Tag($$renderer2, { size: 18 });
      $$renderer2.push(`<!----> <!--[-->`);
      const each_array = ensure_array_like(project.metadata.tags);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let tag = each_array[$$index];
        $$renderer2.push(`<span class="tag bg-surface0 rounded px-2 py-1 font-semibold"${attr_style(`color: var(--color-${stringify(tagColors[tag])})`)}>${escape_html(tag)}</span>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { project });
  });
}
export {
  ProjectTags as P
};
