import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   root: "03-jsx",
//   build: {
//     outDir: "../dist",
//   },
// });
//type:"module" INSIDE package.json tells it to us modules as oppose to use commonJS

// replace export
export default defineConfig({
  root: "04-hooks",
  build: {
    outDir: "../dist",
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
      "/public": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
});
