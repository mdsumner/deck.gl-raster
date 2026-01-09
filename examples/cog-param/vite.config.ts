import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
   base: './',   // <-- relative paths
  server: {
    port: 3000,
  },
});
