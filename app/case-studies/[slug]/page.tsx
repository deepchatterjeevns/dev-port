import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { getPostBySlug, getAllSlugs } from '@/lib/mdx';
import { mdxComponents } from '@/components/mdx-components';
import { TableOfContents } from '@/components/case-studies/table-of-contents';
import { ReadingProgress } from '@/components/case-studies/reading-progress';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Case Study Not Found | DevOpsbyDC',
    };
  }

  const baseUrl = "https://deepchatterjee.com";
  const url = `${baseUrl}/case-studies/${slug}`;

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: ['Deep Chatterjee'],
      url: url,
      siteName: 'DevOpsbyDC',
      locale: 'en_US',
      images: post.coverImage ? [
        {
          url: post.coverImage.startsWith('http') ? post.coverImage : `${baseUrl}${post.coverImage}`,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ] : [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: post.coverImage ? [post.coverImage.startsWith('http') ? post.coverImage : `${baseUrl}${post.coverImage}`] : [],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const baseUrl = "https://deepchatterjee.com";
  const url = `${baseUrl}/case-studies/${slug}`;

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.coverImage ? (post.coverImage.startsWith('http') ? post.coverImage : `${baseUrl}${post.coverImage}`) : `${baseUrl}/og-image.png`,
    datePublished: post.date,
    dateModified: post.date,
    wordCount: post.wordCount,
    timeRequired: `PT${post.readingTime.minutes}M`,
    author: {
      "@type": "Person",
      name: "Deep Chatterjee",
      url: baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "DeviceByDC", // Keeping original name/logo logic or irrelevant? The user didn't ask to change the Org name, just the URL. But 'DevOpsbyDC' might be the old brand. Let's assume the brand is still DevOpsbyDC for now unless specified. Actually, looking at layout.tsx, the title template is " | Deep Chatterjee".
      // Let's just update the URL as requested.
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/favicon.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    articleSection: post.tags?.[0] || "DevOps",
    keywords: post.tags?.join(", ") || "DevOps, Cloud, Infrastructure",
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ReadingProgress />
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex gap-8">
          {/* Main Content */}
          <div className="flex-1 max-w-3xl">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-emerald-500 transition-colors mb-8"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
              Back to Case Studies
            </Link>

            <article>
              <header className="mb-8">
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                  <time className="font-mono" dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {post.readingTime.text}
                  </span>
                  <span>•</span>
                  <span>{post.wordCount.toLocaleString()} words</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
                <p className="text-lg text-muted-foreground">{post.description}</p>
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-mono bg-emerald-500/10 text-emerald-500 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </header>

              {post.coverImage && (
                <div className="relative aspect-video rounded-lg overflow-hidden mb-10 bg-muted">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>
              )}

              <div className="prose-custom">
                <MDXRemote
                  source={post.content}
                  components={mdxComponents}
                  options={{
                    mdxOptions: {
                      remarkPlugins: [remarkGfm],
                      rehypePlugins: [rehypeHighlight, rehypeSlug],
                    },
                  }}
                />
              </div>
            </article>

            <div className="border-t border-border mt-16 pt-8">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-400 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m12 19-7-7 7-7" />
                  <path d="M19 12H5" />
                </svg>
                View all case studies
              </Link>
            </div>

            {/* End of Main Content Flex Item */}
          </div>

          {/* Table of Contents - Desktop */}
          {post.headings.length > 0 && (
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <TableOfContents headings={post.headings} />
            </aside>
          )}

          {/* End of Flex Container */}
        </div>

        {/* Table of Contents - Mobile */}
        {post.headings.length > 0 && (
          <div className="lg:hidden">
            <TableOfContents headings={post.headings} />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
