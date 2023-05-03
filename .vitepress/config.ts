import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "知识导航",
  description: "一个计算机知识导航小破站",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "计算机基础", link: "/01_basic" },
      { text: "前端知识体系", link: "/02_web" },
      { text: "Node知识体系", link: "/03_node" },
      { text: "Go知识体系", link: "/04_go" },
      { text: "编程思想", link: "/05_think" },
    ],
    logo: "/logo.png",

    // sidebar: {
    //   "/01_basic": [
    //     {
    //       text: "Examples",
    //       items: [
    //         { text: "Markdown Examples", link: "/markdown-examples" },
    //         { text: "Runtime API Examples", link: "/api-examples" },
    //       ],
    //     },
    //   ],
    // },

    socialLinks: [
      { icon: "github", link: "https://github.com/ginlink/gin-navs" },
    ],
  },
});
