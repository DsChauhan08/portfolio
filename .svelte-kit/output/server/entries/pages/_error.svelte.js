import { a6 as head, a0 as escape_html, a4 as attr_style, _ as ensure_array_like, a2 as attr_class, a5 as stringify, a7 as clsx } from "../../chunks/index2.js";
import { p as page } from "../../chunks/index3.js";
function _error($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const CONFIG = {
      REDIRECT_TIME: 20
    };
    const TERMINAL_CONTENT = {
      matrix: {
        title: "> scanning..."
      }
    };
    let errorCode = page.status;
    let errorMessage = page.error?.message || "Page not found";
    let redirectCounter = CONFIG.REDIRECT_TIME;
    let scanProgress = 0;
    let terminalLines = [];
    let currentTerminalLine = "";
    let terminalMode = Math.floor(Math.random() * 3);
    let traceRouteOutput = [];
    head("1j96wlh", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Error ${escape_html(errorCode)} | System Error</title>`);
      });
    });
    $$renderer2.push(`<div class="relative z-10 container mx-auto px-4 py-16"><div class="border-overlay0 bg-base/80 mx-auto max-w-3xl rounded-lg border p-6 shadow-lg backdrop-blur-md"><div class="mb-6 flex items-center"><div class="text-accent mr-4 font-mono text-6xl font-bold">${escape_html(errorCode)}</div> <div class="border-overlay0 border-l-2 pl-4"><h1 class="text-text font-mono text-2xl font-bold">Page Not Found</h1> <p class="text-subtext0">${escape_html(errorMessage)}</p></div></div> <div class="text-accent mb-4 animate-pulse text-center font-mono text-sm">> Redirecting in ${escape_html(redirectCounter)}...</div> <div class="mb-6 font-mono text-sm">`);
    if (terminalMode === 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="border-overlay0 bg-crust/80 overflow-hidden rounded border p-4"><div class="text-text mb-2">${escape_html(TERMINAL_CONTENT.matrix.title)}</div> <div class="bg-surface0 mb-4 h-2 w-full rounded-full"><div class="bg-accent h-full rounded-full transition-all duration-300"${attr_style(`width: ${stringify(scanProgress)}%`)}></div></div> <div class="min-h-[3rem]">`);
      {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      if (terminalMode === 1) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="border-overlay0 bg-crust/80 overflow-hidden rounded border p-4"><div class="min-h-[12rem]"><!--[-->`);
        const each_array = ensure_array_like(terminalLines);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let line = each_array[$$index];
          $$renderer2.push(`<div${attr_class(` ${stringify(line.includes("Error") || line.includes("FATAL") ? "text-red" : line.includes("SYSTEM") ? "text-accent animate-pulse font-bold" : "text-text")}`)}>${escape_html(line)}</div>`);
        }
        $$renderer2.push(`<!--]--> <div class="text-text inline"><span>${escape_html(currentTerminalLine)}</span><span class="inline-block w-2">`);
        {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`_`);
        }
        $$renderer2.push(`<!--]--></span></div></div></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<div class="border-overlay0 bg-crust/80 overflow-hidden rounded border p-4"><div class="min-h-[10rem]"><!--[-->`);
        const each_array_1 = ensure_array_like(terminalLines);
        for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
          let line = each_array_1[$$index_1];
          $$renderer2.push(`<div${attr_class(clsx(line.includes("bash:") || line.includes("ls:") ? "text-red" : "text-text"))}>${escape_html(line)}</div>`);
        }
        $$renderer2.push(`<!--]--> <div class="text-text inline"><span>${escape_html(currentTerminalLine)}</span><span class="inline-block w-2">`);
        {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`_`);
        }
        $$renderer2.push(`<!--]--></span></div></div></div>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div> `);
    if (terminalMode === 0 && traceRouteOutput.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="mb-6 font-mono text-xs"><div class="border-overlay0 bg-crust/80 overflow-hidden rounded border p-4"><div class="text-text mb-2">traceroute to ${escape_html(page.url.pathname)}:</div> <!--[-->`);
      const each_array_2 = ensure_array_like(traceRouteOutput);
      for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
        let trace = each_array_2[$$index_2];
        $$renderer2.push(`<div${attr_class(clsx(trace.color))}>${escape_html(trace.hop)}. ${escape_html(trace.host)} (${escape_html(trace.ip)}) ${escape_html(trace.time)}</div>`);
      }
      $$renderer2.push(`<!--]--></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <div class="flex flex-col justify-center gap-4 sm:flex-row"><a href="/" class="border-accent bg-accent/20 text-accent hover:bg-accent/30 rounded-md border px-6 py-2 text-center transition-all duration-300">Return to Home</a> <button class="border-overlay0 bg-surface0/50 text-text hover:bg-surface0 rounded-md border px-6 py-2 transition-all duration-300">Go Back</button></div></div></div>`);
  });
}
export {
  _error as default
};
