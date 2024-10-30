import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  // build: {
  //   // generate .vite/manifest.json in outDir
  //   manifest: true,
  //   rollupOptions: {
  //     // overwrite default .html entry
  //     input: '/path/to/main.js',
  //   },
  // },
  plugins: [react()],
  // base: "/localhost:8080",
});
// vite.config.js
