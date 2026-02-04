import { a0 as sanitize_props, a1 as spread_props, a2 as slot } from "./index2.js";
import { I as Icon } from "./Icon.js";
function Code($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M7 8l-4 4l4 4" }],
    ["path", { "d": "M17 8l4 4l-4 4" }],
    ["path", { "d": "M14 4l-4 16" }]
  ];
  Icon($$renderer, spread_props([
    { type: "outline", name: "code" },
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
export {
  Code as C
};
