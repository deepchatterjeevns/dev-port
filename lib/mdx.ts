import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  coverImage?: string;
  tags?: string[];
  readingTime: string;
  content: string;
}

export interface BlogMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  coverImage?: string;
  tags?: string[];
  readingTime: string;
}

function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
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
      
      return {
        slug,
        title: data.title || slug,
        date: data.date || new Date().toISOString().split('T')[0],
        description: data.description || '',
        coverImage: data.coverImage,
        tags: data.tags || [],
        readingTime: calculateReadingTime(content),
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
  
  return {
    slug,
    title: data.title || slug,
    date: data.date || new Date().toISOString().split('T')[0],
    description: data.description || '',
    coverImage: data.coverImage,
    tags: data.tags || [],
    readingTime: calculateReadingTime(content),
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
