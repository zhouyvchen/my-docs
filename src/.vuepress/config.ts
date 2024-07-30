import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/my-docs/",

  lang: "zh-CN",
  title: "文档演示",
  description: "vuepress-theme-hope 的文档演示",

  theme,

  
// 添加 Google Fonts 的链接
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&family=Noto+Sans+SC:wght@100..900&display=swap', rel: 'stylesheet' }]
  ],

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
