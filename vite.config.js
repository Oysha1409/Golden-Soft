import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      component: `${path.resolve(__dirname, "./src/component/")}`,
      pages: path.resolve(__dirname, "./src/pages"),
      assets: path.resolve(__dirname, "./src/assets"),
      constants: path.resolve(__dirname, "./src/constants"),
      ui: path.resolve(__dirname, "./src/ui"),
      utils: path.resolve(__dirname, "./src/utils"),
      hooks: path.resolve(__dirname, "./src/hooks"),
      context: path.resolve(__dirname, "./src/hooks"),
    },
  },
});
