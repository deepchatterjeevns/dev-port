import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';

export default function BlogSection() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">Recent Posts</h2>
        
        <div className="space-y-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block group py-4 border-b border-border hover:border-emerald-500/50 transition-colors"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <span className="text-sm font-mono text-muted-foreground">
                    {post.date}
                  </span>
                  <h3 className="text-lg font-medium group-hover:text-emerald-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {post.readingTime}
                  </p>
                </div>
                <svg
                  className="w-5 h-5 text-muted-foreground group-hover:text-emerald-500 group-hover:translate-x-1 transition-all"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="/blog"
          className="inline-flex items-center gap-2 mt-8 text-emerald-500 hover:text-emerald-400 transition-colors"
        >
          View all posts
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
