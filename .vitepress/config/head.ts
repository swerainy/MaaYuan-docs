import type { HeadConfig } from "vitepress";

export const head: HeadConfig[] = [
  ["meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }],
  ["meta", { name: "description", content: "MaaYuan 文档站" }],
  ["meta", { property: "og:type", content: "website" }],
  ["meta", { property: "og:locale", content: "zh_CN" }],
  ["meta", { property: "og:title", content: "MaaYuan Docs" }],
  ["meta", { property: "og:description", content: "MaaYuan 文档站" }],
  ["link", { rel: "icon", href: "/favicon.ico" }],
  ["link", { rel: "apple-touch-icon", href: "/icon.png" }],
];
