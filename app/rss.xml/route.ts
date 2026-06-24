import { getAllPosts } from '@/lib/mdx';

const SITE_URL = 'https://deepchatterjee.com';

export async function GET() {
  const posts = getAllPosts();

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Deep Chatterjee (DevOpsbyDC)</title>
    <link>https://deepchatterjee.com</link>
    <description>DevOps Engineer with 8+ years of experience building scalable cloud infrastructure.</description>
    <language>en-US</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    ${posts
      .map((post) => {
        return `
      <item>
        <title><![CDATA[${post.title}]]></title>
        <link>${SITE_URL}/case-studies/${post.slug}</link>
        <description><![CDATA[${post.description}]]></description>
        <pubDate>${new Date(post.date).toUTCString()}</pubDate>
        <guid isPermaLink="true">${SITE_URL}/case-studies/${post.slug}</guid>
      </item>`;
      })
      .join('')}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
}
