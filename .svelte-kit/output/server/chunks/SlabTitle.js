import { $ as attr, _ as ensure_array_like, a2 as attr_class, a4 as attr_style, a0 as escape_html } from "./index2.js";
function SlabTitle($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { title, slug, href, config, hash } = $$props;
    const words = title.split(" ");
    const safePath = slug.split("/").pop() || slug;
    const colorHash = hash || slug;
    const wordConfigs = config ? config.split(/\s+/).filter(Boolean).map((cfg) => {
      const colorMatch = cfg.match(/\[([^\]]+)\]/);
      const cleanedCfg = colorMatch ? cfg.replace(colorMatch[0], "") : cfg;
      const sizeMatch = cleanedCfg.match(/^([\d.]+)/);
      const size = sizeMatch ? parseFloat(sizeMatch[1]) : 3;
      const colored = cleanedCfg.includes("c") || Boolean(colorMatch);
      const italic = cleanedCfg.includes("i");
      const colorToken = colorMatch?.[1];
      const inlineColor = colorToken?.startsWith("#") ? colorToken : void 0;
      const classColor = inlineColor ? void 0 : colorToken;
      return {
        size,
        colored,
        italic,
        color: inlineColor,
        colorClass: classColor
      };
    }) : words.map((_) => ({ size: 3, colored: false, italic: false }));
    function hashCode(str) {
      let hash2 = 0;
      for (let i = 0; i < str.length; i++) {
        hash2 = (hash2 << 5) - hash2 + str.charCodeAt(i);
        hash2 |= 0;
      }
      return Math.abs(hash2);
    }
    const wordCounts = /* @__PURE__ */ new Map();
    function getViewTransitionName(word) {
      const normalized = word.toLowerCase().replace(/[^a-z0-9\s-_]/g, "");
      const count = wordCounts.get(normalized) || 0;
      wordCounts.set(normalized, count + 1);
      return `_${safePath}__${normalized}${count > 0 ? "___" + count : ""}`;
    }
    const accentColors = [
      "text-rosewater",
      "text-flamingo",
      "text-pink",
      "text-mauve",
      "text-red",
      "text-maroon",
      "text-peach",
      "text-yellow",
      "text-green",
      "text-teal",
      "text-sky",
      "text-sapphire",
      "text-blue",
      "text-lavender"
    ];
    const grayscaleColors = [
      "text-text",
      "text-subtext1",
      "text-subtext0",
      "text-overlay2"
    ];
    function getColorClass(index, colored) {
      const h = hashCode(colorHash + index);
      if (colored) {
        return accentColors[h % accentColors.length];
      } else {
        return grayscaleColors[h % grayscaleColors.length];
      }
    }
    function slabWords($$renderer3) {
      $$renderer3.push(`<!--[-->`);
      const each_array = ensure_array_like(words);
      for (let i = 0, $$length = each_array.length; i < $$length; i++) {
        let word = each_array[i];
        const vtName = getViewTransitionName(word);
        const wordConfig = wordConfigs[i] ?? { size: 3, colored: false, italic: false, color: void 0 };
        const h = hashCode(colorHash + i);
        const fontWeight = wordConfig.italic ? [300, 400, 500][h % 3] : 900;
        const colorClass = wordConfig.color ? "" : wordConfig.colorClass ?? getColorClass(i, wordConfig.colored);
        const inlineStyle = `view-transition-name: ${vtName}; font-size: ${wordConfig.size}rem; font-weight: ${fontWeight};${wordConfig.color ? ` color: ${wordConfig.color};` : ""}`;
        $$renderer3.push(`<span${attr_class(`leading-none uppercase ${colorClass}`, void 0, {
          "font-jetbrains-mono": !wordConfig.italic,
          "font-serif": wordConfig.italic,
          "italic": wordConfig.italic
        })}${attr_style(inlineStyle)}>${escape_html(word)}</span>`);
      }
      $$renderer3.push(`<!--]-->`);
    }
    if (href) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<a${attr("href", href)} class="mx-auto mb-6 block w-full max-w-4xl px-4 outline-none"><h2 class="mx-auto flex w-full flex-wrap items-center justify-center gap-x-3 gap-y-2">`);
      slabWords($$renderer2);
      $$renderer2.push(`<!----></h2></a>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<h1 class="mx-auto mb-6 flex w-full max-w-4xl flex-wrap items-center justify-center gap-x-3 gap-y-2 px-4">`);
      slabWords($$renderer2);
      $$renderer2.push(`<!----></h1>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
export {
  SlabTitle as S
};
