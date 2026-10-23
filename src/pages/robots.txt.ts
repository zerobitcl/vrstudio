import type { APIRoute } from "astro";
import { siteUrl } from "../../site.config.mjs";

export const GET: APIRoute = () =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${siteUrl.replace(/\/$/, "")}/sitemap-index.xml\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
