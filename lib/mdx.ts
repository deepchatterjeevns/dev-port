import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content/case-studies');

export interface ReadingTime {
  text: string;
  minutes: number;
  words: number;
}

export interface Heading {
  id: string;
  text: string;
  level: number;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  coverImage?: string;
  tags?: string[];
  readingTime: ReadingTime;
  wordCount: number;
  headings: Heading[];
  content: string;
}

export interface BlogMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  coverImage?: string;
  tags?: string[];
  readingTime: ReadingTime;
  wordCount: number;
}

function calculateReadingTime(content: string): ReadingTime {
  const wordsPerMinute = 200;
  // Remove markdown syntax, code blocks, and HTML tags for accurate word count
  const plainText = content
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/`[^`]+`/g, '') // Remove inline code
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1') // Convert links to text
    .replace(/[#*_~`]/g, '') // Remove markdown formatting
    .replace(/<[^>]+>/g, '') // Remove HTML tags
    .replace(/\n+/g, ' ') // Replace newlines with spaces
    .trim();

  const words = plainText.split(/\s+/).filter(word => word.length > 0).length;
  const minutes = Math.max(1, Math.ceil(words / wordsPerMinute));

  return {
    text: `${minutes} min read`,
    minutes,
    words,
  };
}

function extractHeadings(content: string): Heading[] {
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  const headings: Heading[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    // Create slug from heading text (similar to rehype-slug)
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single
      .trim();

    headings.push({ id, text, level });
  }

  return headings;
}

export function getAllPosts(): BlogMeta[] {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const files = fs.readdirSync(contentDirectory);

  const posts = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '');
      const fullPath = path.join(contentDirectory, file);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      const readingTime = calculateReadingTime(content);

      return {
        slug,
        title: data.title || slug,
        date: data.date || new Date().toISOString().split('T')[0],
        description: data.description || '',
        coverImage: data.coverImage,
        tags: data.tags || [],
        readingTime,
        wordCount: readingTime.words,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getPostBySlug(slug: string): BlogPost | null {
  const fullPath = path.join(contentDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const readingTime = calculateReadingTime(content);
  const headings = extractHeadings(content);

  return {
    slug,
    title: data.title || slug,
    date: data.date || new Date().toISOString().split('T')[0],
    description: data.description || '',
    coverImage: data.coverImage,
    tags: data.tags || [],
    readingTime,
    wordCount: readingTime.words,
    headings,
    content,
  };
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  return fs.readdirSync(contentDirectory)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}
