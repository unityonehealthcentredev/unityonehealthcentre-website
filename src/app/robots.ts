import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      // Allow AI Search Engine Crawlers for AEO Optimization
      {
        userAgent: ["GPTBot", "ChatGPT-User", "PerplexityBot", "ClaudeBot"],
        allow: "/",
      },
    ],
    sitemap: "https://www.unityonehealthcentre.com/sitemap.xml",
  };
}