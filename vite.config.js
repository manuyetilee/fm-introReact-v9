import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "01-no-frills-react",
  build: {
    outDir: "../dist",
  },
});
//type:"module" INSIDE package.json tells it to us modules as oppose to use commonJS
