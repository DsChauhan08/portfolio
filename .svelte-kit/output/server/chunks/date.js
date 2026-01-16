import { X as sanitize_props, Y as spread_props, Z as slot } from "./index2.js";
import { I as Icon } from "./Icon.js";
function Tag($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      { "d": "M7.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" }
    ],
    [
      "path",
      {
        "d": "M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3z"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { type: "outline", name: "tag" },
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
function formatDate(dateString, options) {
  try {
    const monthFormat = options?.shortMonth ? "short" : "long";
    const formatOptions = options?.yearMonthOnly ? { year: "numeric", month: monthFormat } : { year: "numeric", month: monthFormat, day: "2-digit" };
    const match = dateString.match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (match) {
      const [, year, month, day] = match;
      const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
      return date.toLocaleDateString("en-US", formatOptions);
    }
    return new Date(dateString).toLocaleDateString("en-US", formatOptions);
  } catch {
    return dateString;
  }
}
export {
  Tag as T,
  formatDate as f
};
