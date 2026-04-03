import { a as asClassComponent$1, b as render, s as setContext } from "./ui-icons.js";
import "clsx";
import "./environment.js";
let public_env = {};
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
let read_implementation = null;
function set_read_implementation(fn) {
  read_implementation = fn;
}
function set_manifest(_) {
}
function asClassComponent(component) {
  const component_constructor = asClassComponent$1(component);
  const _render = (props, { context, csp } = {}) => {
    const result = render(component, { props, context, csp });
    const munged = Object.defineProperties(
      /** @type {LegacyRenderResult & PromiseLike<LegacyRenderResult>} */
      {},
      {
        css: {
          value: { code: "", map: null }
        },
        head: {
          get: () => result.head
        },
        html: {
          get: () => result.body
        },
        then: {
          /**
           * this is not type-safe, but honestly it's the best I can do right now, and it's a straightforward function.
           *
           * @template TResult1
           * @template [TResult2=never]
           * @param { (value: LegacyRenderResult) => TResult1 } onfulfilled
           * @param { (reason: unknown) => TResult2 } onrejected
           */
          value: (onfulfilled, onrejected) => {
            {
              const user_result = onfulfilled({
                css: munged.css,
                head: munged.head,
                html: munged.html
              });
              return Promise.resolve(user_result);
            }
          }
        }
      }
    );
    return munged;
  };
  component_constructor.render = _render;
  return component_constructor;
}
function Root($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      stores,
      page,
      constructors,
      components = [],
      form,
      data_0 = null,
      data_1 = null
    } = $$props;
    {
      setContext("__svelte__", stores);
    }
    {
      stores.page.set(page);
    }
    const Pyramid_1 = constructors[1];
    if (constructors[1]) {
      $$renderer2.push("<!--[-->");
      const Pyramid_0 = constructors[0];
      $$renderer2.push(`<!---->`);
      Pyramid_0($$renderer2, {
        data: data_0,
        form,
        params: page.params,
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->`);
          Pyramid_1($$renderer3, { data: data_1, form, params: page.params });
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      const Pyramid_0 = constructors[0];
      $$renderer2.push(`<!---->`);
      Pyramid_0($$renderer2, { data: data_0, form, params: page.params });
      $$renderer2.push(`<!---->`);
    }
    $$renderer2.push(`<!--]--> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
const root = asClassComponent(Root);
const options = {
  app_template_contains_nonce: false,
  async: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  csrf_trusted_origins: [],
  embedded: false,
  env_public_prefix: "PUBLIC_",
  env_private_prefix: "",
  hash_routing: false,
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root,
  service_worker: false,
  service_worker_options: void 0,
  templates: {
    app: ({ head, body, assets, nonce, env }) => '<!doctype html>\n<html\n  lang="en"\n  class="bg-base font-jetbrains-mono text-text selection:bg-accent/30 selection:text-accent/80 caret-accent scrollbar min-h-screen"\n>\n  <head>\n    <meta charset="utf-8" />\n    <link rel="icon" href="' + assets + '/favicon.svg" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <meta property="og:locale" content="en_US" />\n\n    <!-- Preload critical fonts for better performance -->\n    <link\n      rel="preload"\n      href="' + assets + '/fonts/jetbrains-mono-latin-400-normal.woff2"\n      as="font"\n      type="font/woff2"\n      crossorigin="anonymous"\n    />\n    <link\n      rel="preload"\n      href="' + assets + '/fonts/jetbrains-mono-latin-700-normal.woff2"\n      as="font"\n      type="font/woff2"\n      crossorigin="anonymous"\n    />\n\n    <!-- Load fonts with optimal font-display -->\n    <style>\n      @font-face {\n        font-family: "JetBrains Mono";\n        font-style: normal;\n        font-display: swap;\n        font-weight: 400;\n        src: url("' + assets + '/fonts/jetbrains-mono-latin-400-normal.woff2")\n          format("woff2");\n        unicode-range:\n          U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,\n          U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,\n          U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n      }\n      @font-face {\n        font-family: "JetBrains Mono";\n        font-style: normal;\n        font-display: swap;\n        font-weight: 700;\n        src: url("' + assets + '/fonts/jetbrains-mono-latin-700-normal.woff2")\n          format("woff2");\n        unicode-range:\n          U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,\n          U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,\n          U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n      }\n    </style>\n\n    <script data-theme-init>\n      (() => {\n        try {\n          const safeParse = (raw) => {\n            if (!raw) return null;\n            try {\n              return JSON.parse(raw);\n            } catch {\n              return raw;\n            }\n          };\n\n          const storedPalette = safeParse(localStorage.getItem("palette"));\n          const storedAccent = safeParse(localStorage.getItem("accent"));\n\n          const palette =\n            storedPalette ??\n            (window.matchMedia("(prefers-color-scheme: light)").matches\n              ? "latte"\n              : "mocha");\n          if (palette) {\n            document.documentElement.classList.add(palette);\n          }\n\n          const accent = storedAccent ?? "peach";\n          document.documentElement.style.setProperty(\n            "--current-accent-color",\n            `var(--color-${accent})`,\n          );\n        } catch (error) {\n          console.warn("Theme bootstrapping failed", error);\n        }\n      })();\n    <\/script>\n    ' + head + '\n  </head>\n  <body data-sveltekit-preload-data="hover">\n    <div>' + body + "</div>\n  </body>\n</html>\n",
    error: ({ status, message }) => '<!doctype html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family:
					system-ui,
					-apple-system,
					BlinkMacSystemFont,
					'Segoe UI',
					Roboto,
					Oxygen,
					Ubuntu,
					Cantarell,
					'Open Sans',
					'Helvetica Neue',
					sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
				margin: 0;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  },
  version_hash: "lcw175"
};
async function get_hooks() {
  let handle;
  let handleFetch;
  let handleError;
  let handleValidationError;
  let init;
  ({ handle, handleFetch, handleError, handleValidationError, init } = await import("./hooks.server.js"));
  let reroute;
  let transport;
  return {
    handle,
    handleFetch,
    handleError,
    handleValidationError,
    init,
    reroute,
    transport
  };
}
export {
  set_public_env as a,
  set_read_implementation as b,
  set_manifest as c,
  get_hooks as g,
  options as o,
  public_env as p,
  read_implementation as r,
  set_private_env as s
};
