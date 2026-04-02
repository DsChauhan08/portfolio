import "clsx";
import { h as html } from "./html.js";
import { c as createContentService } from "./factory.js";
import { E as External_link } from "./external-link.js";
import { C as Code } from "./code.js";
import { X as sanitize_props, Y as spread_props, Z as slot } from "./index2.js";
import { I as Icon } from "./Icon.js";
import { B as Brand_github } from "./brand-github.js";
function File_text($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M14 3v4a1 1 0 0 0 1 1h4" }],
    [
      "path",
      {
        "d": "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"
      }
    ],
    ["path", { "d": "M9 9l1 0" }],
    ["path", { "d": "M9 13l6 0" }],
    ["path", { "d": "M9 17l6 0" }]
  ];
  Icon($$renderer, spread_props([
    { type: "outline", name: "file-text" },
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
const metadata$5 = {
  "title": "Advent of Code 2025",
  "description": "My solutions for Advent of Code 2025",
  "date": "2025-12-03",
  "published": true,
  "featured": true,
  "tags": ["java", "algorithms", "advent-of-code", "problem-solving"],
  "images": [],
  "image": {
    "url": "/projects/advent-of-code-2025.png",
    "alt": "Advent of Code 2025"
  },
  "links": [
    {
      "text": "GitHub",
      "url": "https://github.com/DsChauhan08/ADVENT_OF_CODE_2025"
    }
  ]
};
const {
  title: title$5,
  description: description$5,
  date: date$5,
  published: published$5,
  featured: featured$5,
  tags: tags$5,
  images: images$2,
  image: image$4,
  links: links$5
} = metadata$5;
function Advent_of_code_2025_svx($$renderer) {
  $$renderer.push(`<h1 id="advent-of-code-2025"><a class="sec-anchor" href="#advent-of-code-2025">Advent of Code 2025</a></h1> <p>My solutions for <a href="https://adventofcode.com/2025" rel="noopener noreferrer" target="_blank">Advent of Code 2025</a>, written in Java.</p> <h2 id="progress"><a class="sec-anchor" href="#progress">Progress</a></h2> <p>Working through the daily challenges, focusing on clean solutions over speed.</p> <h2 id="approach"><a class="sec-anchor" href="#approach">Approach</a></h2> <ul><li>Readability first</li> <li>No external libraries</li> <li>Documented solutions</li></ul>`);
}
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Advent_of_code_2025_svx,
  metadata: metadata$5
}, Symbol.toStringTag, { value: "Module" }));
const metadata$4 = {
  "title": "DocSentinel",
  "description": "Local-first documentation drift detection and fixing tool",
  "date": "2026-01-10",
  "published": true,
  "featured": true,
  "tags": ["rust", "documentation", "cli", "developer-tools"],
  "image": { "url": "/projects/docsentinel.png", "alt": "DocSentinel CLI" },
  "links": [
    {
      "text": "GitHub",
      "url": "https://github.com/DsChauhan08/docsentinel"
    }
  ]
};
const {
  title: title$4,
  description: description$4,
  date: date$4,
  published: published$4,
  featured: featured$4,
  tags: tags$4,
  image: image$3,
  links: links$4
} = metadata$4;
function Docsentinel_svx($$renderer) {
  $$renderer.push(`<h1 id="docsentinel"><a class="sec-anchor" href="#docsentinel">DocSentinel</a></h1> <p>A local-first documentation drift detection and fixing tool written in Rust.</p> <h2 id="what-it-does"><a class="sec-anchor" href="#what-it-does">What it does</a></h2> <p>DocSentinel watches your codebase and documentation, detecting when they fall out of sync. It uses intelligent diffing to find discrepancies between your code and docs, then suggests fixes or auto-applies them.</p> <h2 id="features"><a class="sec-anchor" href="#features">Features</a></h2> <ul><li><strong>Local-first</strong>: Works entirely offline, no cloud dependencies</li> <li><strong>Fast</strong>: Built in Rust for maximum performance</li> <li><strong>Smart detection</strong>: Uses AST parsing to understand code changes</li> <li><strong>Auto-fix</strong>: Can automatically update documentation when safe</li></ul> <h2 id="tech-stack"><a class="sec-anchor" href="#tech-stack">Tech Stack</a></h2> <ul><li>Rust</li> <li>Tree-sitter for parsing</li> <li>CLI-first design</li></ul>`);
}
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Docsentinel_svx,
  metadata: metadata$4
}, Symbol.toStringTag, { value: "Module" }));
const metadata$3 = {
  "title": "mixgen",
  "description": "YouTube sound download and editing tool CLI",
  "date": "2025-12-07",
  "published": true,
  "featured": false,
  "tags": ["shell", "audio", "cli", "youtube"],
  "images": [],
  "image": { "url": "/projects/mixgen.png", "alt": "mixgen" },
  "links": [
    {
      "text": "GitHub",
      "url": "https://github.com/DsChauhan08/mixgen"
    }
  ]
};
const {
  title: title$3,
  description: description$3,
  date: date$3,
  published: published$3,
  featured: featured$3,
  tags: tags$3,
  images: images$1,
  image: image$2,
  links: links$3
} = metadata$3;
function Mixgen_svx($$renderer) {
  $$renderer.push(`<h1 id="mixgen"><a class="sec-anchor" href="#mixgen">mixgen</a></h1> <p>A CLI tool for downloading and editing audio from YouTube videos.</p> <h2 id="features"><a class="sec-anchor" href="#features">Features</a></h2> <ul><li>Download audio from YouTube</li> <li>Basic editing (trim, merge)</li> <li>Multiple format support</li> <li>Shell script - works everywhere</li></ul>`);
}
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Mixgen_svx,
  metadata: metadata$3
}, Symbol.toStringTag, { value: "Module" }));
const metadata$2 = {
  "title": "Qwen2.5-3B-Finance-GGUF",
  "description": "Fine-tuned LLM for finance domain in GGUF format",
  "date": "2026-01-01",
  "published": true,
  "featured": true,
  "tags": [
    "llm",
    "huggingface",
    "fine-tuning",
    "python",
    "ai",
    "finance"
  ],
  "links": [
    {
      "text": "HuggingFace",
      "url": "https://huggingface.co/dschauhan08/Qwen2.5-3B-Finance-GGUF"
    },
    {
      "text": "GitHub",
      "url": "https://github.com/DsChauhan08/Qwen2.5-3B-Finance-GGUF"
    }
  ]
};
const { title: title$2, description: description$2, date: date$2, published: published$2, featured: featured$2, tags: tags$2, links: links$2 } = metadata$2;
function Qwen_finance_gguf_svx($$renderer) {
  $$renderer.push(`<h1 id="qwen25-3b-finance-gguf"><a class="sec-anchor" href="#qwen25-3b-finance-gguf">Qwen2.5-3B-Finance-GGUF</a></h1> <p>A fine-tuned version of Qwen2.5-3B optimized for finance domain tasks, converted to GGUF format for efficient local inference.</p> <h2 id="what-it-does"><a class="sec-anchor" href="#what-it-does">What it does</a></h2> <p>Specialized for financial text understanding, analysis, and generation. Runs locally without cloud dependencies.</p> <h2 id="features"><a class="sec-anchor" href="#features">Features</a></h2> <ul><li>Finance domain knowledge</li> <li>GGUF format for llama.cpp compatibility</li> <li>Runs on consumer hardware</li> <li>No API costs</li></ul> <h2 id="training"><a class="sec-anchor" href="#training">Training</a></h2> <p>Fine-tuned using QLoRA on curated financial datasets.</p>`);
}
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qwen_finance_gguf_svx,
  metadata: metadata$2
}, Symbol.toStringTag, { value: "Module" }));
const metadata$1 = {
  "title": "scrapy",
  "description": "Lightweight web scraping tool in Rust",
  "date": "2025-12-25",
  "published": true,
  "featured": false,
  "tags": ["rust", "web-scraping", "cli"],
  "images": [],
  "image": { "url": "/projects/scrapy.png", "alt": "scrapy" },
  "links": [
    {
      "text": "GitHub",
      "url": "https://github.com/DsChauhan08/scrapy"
    }
  ]
};
const {
  title: title$1,
  description: description$1,
  date: date$1,
  published: published$1,
  featured: featured$1,
  tags: tags$1,
  images,
  image: image$1,
  links: links$1
} = metadata$1;
function Scrapy_svx($$renderer) {
  $$renderer.push(`<h1 id="scrapy"><a class="sec-anchor" href="#scrapy">scrapy</a></h1> <p>A lightweight web scraping tool written in Rust.</p> <h2 id="features"><a class="sec-anchor" href="#features">Features</a></h2> <ul><li>Fast async HTTP requests</li> <li>CSS selector support</li> <li>JSON output</li> <li>Rate limiting built-in</li></ul>`);
}
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Scrapy_svx,
  metadata: metadata$1
}, Symbol.toStringTag, { value: "Module" }));
const metadata = {
  "title": "tunl",
  "description": "Simplest TCP Proxy - lightweight, fast, no dependencies",
  "date": "2025-12-13",
  "published": true,
  "featured": true,
  "tags": ["c", "networking", "proxy", "tcp", "low-level"],
  "image": { "url": "/projects/tunl.png", "alt": "tunl TCP proxy" },
  "links": [
    {
      "text": "GitHub",
      "url": "https://github.com/DsChauhan08/tunl"
    }
  ]
};
const {
  title,
  description,
  date,
  published,
  featured,
  tags,
  image,
  links
} = metadata;
function Tunl_svx($$renderer) {
  $$renderer.push(`<h1 id="tunl"><a class="sec-anchor" href="#tunl">tunl</a></h1> <p>The simplest TCP proxy you’ll ever use. Written in pure C with zero dependencies.</p> <h2 id="philosophy"><a class="sec-anchor" href="#philosophy">Philosophy</a></h2> <p>Most proxies are bloated. tunl is not. It does one thing and does it well: forward TCP connections.</p> <h2 id="features"><a class="sec-anchor" href="#features">Features</a></h2> <ul><li><strong>Zero dependencies</strong>: Just C and POSIX</li> <li><strong>Tiny footprint</strong>: Compiles to a few KB</li> <li><strong>Fast</strong>: No overhead, just raw socket forwarding</li> <li><strong>Simple config</strong>: Command-line driven</li></ul> <h2 id="usage"><a class="sec-anchor" href="#usage">Usage</a></h2> ${html(`<figure class="code-block" data-codeblock data-lang="bash">
		
		<div class="code-block__body">
			<button type="button" class="code-block__copy code-block__copy--floating" aria-label="Copy code" data-code="dHVubCA8bGlzdGVuX3BvcnQ+IDx0YXJnZXRfaG9zdD4gPHRhcmdldF9wb3J0Pg==">
				<svg class="icon-copy" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<rect x="9" y="9" width="13" height="13" rx="2"></rect>
					<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
				</svg>
				<svg class="icon-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<polyline points="20 6 9 17 4 12"></polyline>
				</svg>
				<span class="sr-only">Copy code</span>
			</button>
			<div class="code-block__meta-row"><span class="code-block__lang">bash</span></div>
			<pre class="shiki shiki-themes catppuccin-mocha catppuccin-macchiato catppuccin-frappe catppuccin-latte" style="--shiki-mocha:#cdd6f4;--shiki-macchiato:#cad3f5;--shiki-frappe:#c6d0f5;--shiki-latte:#4c4f69;--shiki-mocha-bg:#1e1e2e;--shiki-macchiato-bg:#24273a;--shiki-frappe-bg:#303446;--shiki-latte-bg:#eff1f5" tabindex="0"><code><span class="line"><span style="--shiki-mocha:#89B4FA;--shiki-mocha-font-style:italic;--shiki-macchiato:#8AADF4;--shiki-macchiato-font-style:italic;--shiki-frappe:#8CAAEE;--shiki-frappe-font-style:italic;--shiki-latte:#1E66F5;--shiki-latte-font-style:italic">tunl</span><span style="--shiki-mocha:#94E2D5;--shiki-macchiato:#8BD5CA;--shiki-frappe:#81C8BE;--shiki-latte:#179299"> </span><span style="--shiki-mocha:#94E2D5;--shiki-macchiato:#8BD5CA;--shiki-frappe:#81C8BE;--shiki-latte:#179299">&#x3C;</span><span style="--shiki-mocha:#A6E3A1;--shiki-macchiato:#A6DA95;--shiki-frappe:#A6D189;--shiki-latte:#40A02B">listen_por</span><span style="--shiki-mocha:#CDD6F4;--shiki-macchiato:#CAD3F5;--shiki-frappe:#C6D0F5;--shiki-latte:#4C4F69">t</span><span style="--shiki-mocha:#94E2D5;--shiki-macchiato:#8BD5CA;--shiki-frappe:#81C8BE;--shiki-latte:#179299">></span><span style="--shiki-mocha:#94E2D5;--shiki-macchiato:#8BD5CA;--shiki-frappe:#81C8BE;--shiki-latte:#179299"> </span><span style="--shiki-mocha:#94E2D5;--shiki-macchiato:#8BD5CA;--shiki-frappe:#81C8BE;--shiki-latte:#179299">&#x3C;</span><span style="--shiki-mocha:#A6E3A1;--shiki-macchiato:#A6DA95;--shiki-frappe:#A6D189;--shiki-latte:#40A02B">target_hos</span><span style="--shiki-mocha:#CDD6F4;--shiki-macchiato:#CAD3F5;--shiki-frappe:#C6D0F5;--shiki-latte:#4C4F69">t</span><span style="--shiki-mocha:#94E2D5;--shiki-macchiato:#8BD5CA;--shiki-frappe:#81C8BE;--shiki-latte:#179299">></span><span style="--shiki-mocha:#94E2D5;--shiki-macchiato:#8BD5CA;--shiki-frappe:#81C8BE;--shiki-latte:#179299"> </span><span style="--shiki-mocha:#94E2D5;--shiki-macchiato:#8BD5CA;--shiki-frappe:#81C8BE;--shiki-latte:#179299">&#x3C;</span><span style="--shiki-mocha:#A6E3A1;--shiki-macchiato:#A6DA95;--shiki-frappe:#A6D189;--shiki-latte:#40A02B">target_por</span><span style="--shiki-mocha:#CDD6F4;--shiki-macchiato:#CAD3F5;--shiki-frappe:#C6D0F5;--shiki-latte:#4C4F69">t</span><span style="--shiki-mocha:#94E2D5;--shiki-macchiato:#8BD5CA;--shiki-frappe:#81C8BE;--shiki-latte:#179299">></span></span></code></pre>
		</div>
	</figure>`)} <p>That’s it. No config files, no YAML, no JSON. Just works.</p>`);
}
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Tunl_svx,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
const DevpostIcon = () => import("./Devpost.js");
function getIconByName(name) {
  switch (name) {
    case "github":
      return Brand_github;
    case "external":
      return External_link;
    case "docs":
      return File_text;
    case "code":
      return Code;
    case "devpost":
      return DevpostIcon;
    default:
      return External_link;
  }
}
const projectService = createContentService({
  modules: /* @__PURE__ */ Object.assign({ "/content/projects/advent-of-code-2025.svx": __vite_glob_0_0, "/content/projects/docsentinel.svx": __vite_glob_0_1, "/content/projects/mixgen.svx": __vite_glob_0_2, "/content/projects/qwen-finance-gguf.svx": __vite_glob_0_3, "/content/projects/scrapy.svx": __vite_glob_0_4, "/content/projects/tunl.svx": __vite_glob_0_5 }),
  contentType: "project",
  filter: (p) => p.metadata.published,
  sort: (a, b) => +new Date(b.metadata.date) - +new Date(a.metadata.date)
});
const getAllProjects = projectService.getAll;
const getProjectBySlug = projectService.getBySlug;
let featuredProjectsPromise = null;
function getFeaturedProjects() {
  if (!featuredProjectsPromise) {
    featuredProjectsPromise = getAllProjects().then(
      (projects) => projects.filter((p) => p.metadata.featured)
    );
  }
  return featuredProjectsPromise;
}
export {
  getFeaturedProjects as a,
  getIconByName as b,
  getProjectBySlug as c,
  getAllProjects as g
};
