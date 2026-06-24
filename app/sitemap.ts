import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/mdx";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://deepchatterjee.com";
  const posts = getAllPosts();

  const routes: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/case-studies`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${base}/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/resume`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Add blog posts
  posts.forEach((post) => {
    routes.push({
      url: `${base}/case-studies/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly",
      priority: 0.6,
    });
  });

  return routes;
}
