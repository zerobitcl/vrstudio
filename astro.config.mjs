import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { siteUrl } from "./site.config.mjs";

export default defineConfig({
  site: siteUrl,
  trailingSlash: "always",
  compressHTML: true,
  build: {
    format: "directory",
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/404"),
    }),
  ],
  prefetch: {
    prefetchAll: false,
    defaultStrategy: "hover",
  },
});
