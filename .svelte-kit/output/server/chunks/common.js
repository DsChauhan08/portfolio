import "clsx";
import { B as Brand_github } from "./brand-github.js";
import { X as sanitize_props, Y as spread_props, Z as slot } from "./index2.js";
import { I as Icon } from "./Icon.js";
function Mail($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"
      }
    ],
    ["path", { "d": "M3 7l9 6l9 -6" }]
  ];
  Icon($$renderer, spread_props([
    { type: "outline", name: "mail" },
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
function Kaggle($$renderer) {
  $$renderer.push(`<svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.281.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.075.285"></path></svg>`);
}
function HuggingFace($$renderer) {
  $$renderer.push(`<svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12.001 2.002c-5.523 0-10 4.477-10 10s4.477 10 10 10c5.522 0 10-4.477 10-10s-4.478-10-10-10zm-.004 1.5a8.5 8.5 0 1 1 0 17 8.5 8.5 0 0 1 0-17zm-3.745 4.99a.75.75 0 0 0-.75.75v5.518a.75.75 0 0 0 .75.75h7.5a.75.75 0 0 0 .75-.75V9.242a.75.75 0 0 0-.75-.75h-7.5zm.75 1.5h6v4.018h-6V9.992z"></path></svg>`);
}
const Site = {
  name: "Dhananjay Singh Chauhan",
  url: "https://dschauhan.dev",
  description: "Dhananjay Singh Chauhan - Year 12 student; forensics and blue team. NixOS user, reality compiler, LLM enjoyer.",
  tags: [
    "Dhananjay Singh Chauhan",
    "DsChauhan08",
    "Year 12 Student",
    "Forensics",
    "Blue Team",
    "Security",
    "NixOS",
    "LLM",
    "Rust Developer",
    "C Developer",
    "Network Security",
    "Malware Analysis"
  ],
  seo: {
    author: "Dhananjay Singh Chauhan",
    birthDate: "2008-08-08"
  },
  out: {
    github: "https://github.com/DsChauhan08",
    kaggle: "https://www.kaggle.com/olliebearman",
    huggingface: "https://huggingface.co/dschauhan08",
    email: "mailto:singhdschauhan10@gmail.com"
  },
  repo: {
    url: "https://github.com/DsChauhan08/portfolio"
  }
};
const Socials = [
  {
    url: Site.out.github,
    label: "GitHub",
    icon: Brand_github,
    footer: true
  },
  {
    url: Site.out.kaggle,
    label: "Kaggle",
    icon: Kaggle,
    footer: true
  },
  {
    url: Site.out.huggingface,
    label: "HuggingFace",
    icon: HuggingFace,
    footer: true
  },
  {
    url: Site.out.email,
    label: "Email",
    icon: Mail,
    footer: true
  }
];
export {
  HuggingFace as H,
  Kaggle as K,
  Mail as M,
  Site as S,
  Socials as a
};
