import { w as writable } from "./index.js";
function persistentWritable(key, options) {
  const { validValues, onUpdate, rawString = false } = options;
  let initialValue = typeof options.defaultValue === "function" ? options.defaultValue() : options.defaultValue;
  const store = writable(initialValue);
  return store;
}
const accentColorNames = [
  "rosewater",
  "flamingo",
  "pink",
  "mauve",
  "red",
  "maroon",
  "peach",
  "yellow",
  "green",
  "teal",
  "sky",
  "sapphire",
  "blue",
  "lavender"
];
const Accent = persistentWritable("accent", {
  defaultValue: "peach",
  validValues: accentColorNames,
  onUpdate: (value, isFirstLoad) => {
    const apply = () => document.documentElement.style.setProperty("--current-accent-color", `var(--color-${value})`);
    if (isFirstLoad) {
      apply();
    }
  }
});
const paletteNames = ["latte", "frappe", "macchiato", "mocha"];
function getDefaultPalette() {
  return "mocha";
}
const Palette = persistentWritable("palette", {
  defaultValue: getDefaultPalette,
  validValues: paletteNames,
  onUpdate: (value, isFirstLoad) => {
    const apply = () => {
      document.documentElement.classList.remove(...paletteNames);
      document.documentElement.classList.add(value);
    };
    if (isFirstLoad) {
      apply();
    }
  }
});
function getRandomAccentColor() {
  const randomIndex = Math.floor(Math.random() * accentColorNames.length);
  return accentColorNames[randomIndex];
}
const BackgroundEnabled = persistentWritable("background-enabled", {
  defaultValue: false
});
export {
  Accent as A,
  BackgroundEnabled as B,
  Palette as P,
  accentColorNames as a,
  getRandomAccentColor as g,
  paletteNames as p
};
