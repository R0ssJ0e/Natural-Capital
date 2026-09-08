import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Inline nothing: keep images as real files so they cache well on Cloudflare.
  build: { assetsInlineLimit: 0 },
});
