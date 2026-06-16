/// <reference types="vitest/config" />
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  base: "/healthcareAI/",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL("./index.html", import.meta.url)),
        security: fileURLToPath(new URL("./security.html", import.meta.url)),
        pricing: fileURLToPath(new URL("./pricing.html", import.meta.url)),
      },
    },
  },
  server: {
    port: 8080,
    open: false,
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/test/setup.js",
    css: false,
  },
});
