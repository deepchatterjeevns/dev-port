import { ImageResponse } from 'next/og';
import { getPostBySlug } from '@/lib/mdx';

export const runtime = 'edge';

// We cannot use fs in edge runtime easily, so we might need to fallback or use a different approach.
// However, since mdx.ts uses fs, we must force nodejs runtime for this route if we use that lib.
// Let's try changing runtime to nodejs.
// If that fails, we might need to fetch data differently or accept static images.
// Given strict Next.js App Router rules, opengraph-image often runs in Edge.
// But we can set it to nodejs.

export const alt = 'Blog Post Cover';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default async function Image({ params }: { params: { slug: string } }) {
    // Post data fetching
    const post = getPostBySlug(params.slug);
    const title = post?.title || 'DevOpsbyDC Case Study';
    const tags = post?.tags || [];

    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    backgroundColor: '#09090b', // zinc-950
                    color: '#fafafa', // zinc-50
                    padding: '80px',
                }}
            >
                <div
                    style={{
                        fontSize: 32,
                        marginBottom: 24,
                        color: '#a1a1aa', // zinc-400
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    DevOpsbyDC
                </div>
                <div
                    style={{
                        fontSize: 84,
                        fontWeight: 800,
                        lineHeight: 1.1,
                        marginBottom: 40,
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    {title}
                </div>
                <div style={{ display: 'flex', gap: '20px' }}>
                    {tags.slice(0, 3).map((tag) => (
                        <div
                            key={tag}
                            style={{
                                fontSize: 28,
                                padding: '8px 20px',
                                backgroundColor: '#27272a', // zinc-800
                                borderRadius: '50px',
                                color: '#e4e4e7', // zinc-200
                            }}
                        >
                            #{tag}
                        </div>
                    ))}
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
