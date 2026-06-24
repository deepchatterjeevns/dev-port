import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { getAllPosts } from '@/lib/mdx';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thoughts on DevOps, cloud infrastructure, Kubernetes, and automation.',
  alternates: {
    canonical: 'https://deepchatterjee.com/case-studies',
  },
  openGraph: {
    title: 'Case Studies | Deep Chatterjee',
    description: 'Thoughts on DevOps, cloud infrastructure, Kubernetes, and automation.',
    url: 'https://deepchatterjee.com/case-studies',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies | DevOpsbyDC',
    description: 'Thoughts on DevOps, cloud infrastructure, Kubernetes, and automation.',
  },
};

export default function CaseStudiesPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl font-bold mb-4">Case Studies</h1>
            <p className="text-muted-foreground">
              Thoughts on DevOps, cloud infrastructure, Kubernetes, and automation.
            </p>
          </div>
          <a
            href="/rss.xml"
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-emerald-500/50 transition-colors text-sm"
            aria-label="Subscribe to RSS feed"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248-1.796 0-3.252-1.454-3.252-3.248 0-1.794 1.456-3.248 3.252-3.248 1.795.001 3.251 1.454 3.251 3.248zm-6.503-12.572v4.811c6.05.062 10.96 4.966 11.022 11.009h4.817c-.062-8.71-7.118-15.758-15.839-15.82zm0-3.368c10.58.046 19.152 8.594 19.183 19.188h4.817c-.03-13.231-10.755-23.954-24-24v4.812z" />
            </svg>
            RSS
          </a>
        </div>

        <div className="space-y-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/case-studies/${post.slug}`}
              className="block group"
            >
              <article className="border border-border rounded-lg overflow-hidden transition-all hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10">
                {post.coverImage && (
                  <div className="relative aspect-[2/1] bg-muted">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 800px"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <time className="font-mono">{post.date}</time>
                    <span>•</span>
                    <span>{post.readingTime.text}</span>
                  </div>
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-emerald-500 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground">{post.description}</p>
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
                </div>
              </article>
            </Link>
          ))}
        </div>

        {posts.length === 0 && (
          <p className="text-muted-foreground text-center py-12">
            No blog posts yet. Check back soon!
          </p>
        )}
      </main>
      <Footer />
    </div>
  );
}
