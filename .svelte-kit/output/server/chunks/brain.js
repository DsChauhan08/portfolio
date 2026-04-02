import { X as sanitize_props, Y as spread_props, Z as slot } from "./index2.js";
import { I as Icon } from "./Icon.js";
function Brain($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8"
      }
    ],
    [
      "path",
      {
        "d": "M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8"
      }
    ],
    ["path", { "d": "M17.5 16a3.5 3.5 0 0 0 0 -7h-.5" }],
    ["path", { "d": "M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0" }],
    ["path", { "d": "M6.5 16a3.5 3.5 0 0 1 0 -7h.5" }],
    ["path", { "d": "M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10" }]
  ];
  Icon($$renderer, spread_props([
    { type: "outline", name: "brain" },
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
  Brain as B
};
