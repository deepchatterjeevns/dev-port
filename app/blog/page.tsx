import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { getAllPosts } from '@/lib/mdx';

export const metadata = {
  title: 'Blog | DevOpsbyDC',
  description: 'Thoughts on DevOps, cloud infrastructure, and automation.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-muted-foreground mb-12">
          Thoughts on DevOps, cloud infrastructure, Kubernetes, and automation.
        </p>

        <div className="space-y-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
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
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <time className="font-mono">{post.date}</time>
                    <span>•</span>
                    <span>{post.readingTime}</span>
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
