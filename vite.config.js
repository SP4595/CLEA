import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// https://vite.dev/config/
export default defineConfig({
  base: "/article_show_case/",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // 配置 @ 指向 src 目录
    },
  },
  build: {
    outDir: "docs",
  },
});
