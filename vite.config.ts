// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Your project will be served at https://sudhir-patavardhan.github.io/vyoma-online-quiz/
  // Setting base ensures all asset URLs are rewritten correctly for a subfolder deploy.
  // Ref: Vite "Public Base Path" docs.
  base: "/vyoma-online-quiz/",

  plugins: [react()],

  build: {
    outDir: "dist",
    sourcemap: true, // helpful for debugging production issues
  },
});
