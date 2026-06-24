import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { getPostBySlug, getAllSlugs } from '@/lib/mdx';
import { mdxComponents } from '@/components/mdx-components';
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
      title: 'Post Not Found | DevOpsbyDC',
    };
  }

  return {
    title: `${post.title} | DevOpsbyDC`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      images: post.coverImage ? [post.coverImage] : [],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="max-w-3xl mx-auto px-6 py-24">
        <Link
          href="/blog"
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
          Back to Blog
        </Link>

        <article>
          <header className="mb-8">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <time className="font-mono">{post.date}</time>
              <span>•</span>
              <span>{post.readingTime}</span>
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
            href="/blog"
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
            View all posts
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
