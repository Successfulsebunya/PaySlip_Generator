import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/PaySlip_Generator/",
  root: "github-pages",
  plugins: [react()],
  publicDir: "../public",
  build: {
    outDir: "../dist-pages",
    emptyOutDir: true,
  },
});
