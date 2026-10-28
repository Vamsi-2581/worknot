import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build",
    rolldownOptions: {
      input: {
        main: fileURLToPath(new URL("./index.html", import.meta.url)),
        ja: fileURLToPath(new URL("./ja/index.html", import.meta.url)),
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
