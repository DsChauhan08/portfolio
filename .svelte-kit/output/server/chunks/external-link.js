import { X as sanitize_props, Y as spread_props, Z as slot } from "./index2.js";
import { I as Icon } from "./Icon.js";
function External_link($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"
      }
    ],
    ["path", { "d": "M11 13l9 -9" }],
    ["path", { "d": "M15 4h5v5" }]
  ];
  Icon($$renderer, spread_props([
    { type: "outline", name: "external-link" },
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
  External_link as E
};
