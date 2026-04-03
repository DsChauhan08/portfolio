import tailwindcss from "@tailwindcss/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { enhancedImages } from "@sveltejs/enhanced-img";
// import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig(({ command }) => {
  const isBuild = command === "build";

  return {
    plugins: [
      isBuild && enhancedImages(), // only enable when building for production
      tailwindcss(),
      sveltekit(),
      // visualizer({ emitFile: true, filename: 'stats.html' }),
    ].filter(Boolean),

    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            // Split UI icons into separate chunk for better caching
            if (id.includes("@tabler/icons-svelte")) {
              return "ui-icons";
            }
            // Split Leaflet if it's imported
            if (id.includes("leaflet")) {
              return "leaflet";
            }
          },
        },
      },
    },

    server: { fs: { allow: ["."] } },
  };
});
