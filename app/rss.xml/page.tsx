import { getAllPosts } from '@/lib/mdx';

export const dynamic = 'force-static';

export default function RSSFeed() {
  const baseUrl = "https://deepchatterjee.com";
  const posts = getAllPosts();

  const rssItems = posts.map((post) => {
    const postUrl = `${baseUrl}/case-studies/${post.slug}`;
    const coverImageUrl = post.coverImage
      ? (post.coverImage.startsWith('http') ? post.coverImage : `${baseUrl}${post.coverImage}`)
      : `${baseUrl}/og-image.png`;

    return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.description}]]></description>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author>hello@deepchatterjee.com (Deep Chatterjee)</author>
      <category>${post.tags?.join(', ') || 'DevOps'}</category>
      <enclosure url="${coverImageUrl}" type="image/png" />
    </item>`;
  }).join('');

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Deep Chatterjee - Case Studies</title>
    <description>Thoughts on DevOps, cloud infrastructure, Kubernetes, and automation by Deep Chatterjee.</description>
    <link>${baseUrl}</link>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${baseUrl}/og-image.png</url>
      <title>Deep Chatterjee</title>
      <link>${baseUrl}</link>
    </image>
    <managingEditor>hello@deepchatterjee.com (Deep Chatterjee)</managingEditor>
    <webMaster>hello@deepchatterjee.com (Deep Chatterjee)</webMaster>
    <copyright>Copyright ${new Date().getFullYear()} Deep Chatterjee</copyright>
    ${rssItems}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
