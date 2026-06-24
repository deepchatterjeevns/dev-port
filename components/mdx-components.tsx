import Image from 'next/image';
import Link from 'next/link';

interface MDXImageProps {
  src?: string;
  alt?: string;
}

function MDXImage({ src, alt }: MDXImageProps) {
  if (!src) return null;
  
  return (
    <span className="block my-8">
      <span className="relative block aspect-video rounded-lg overflow-hidden bg-muted">
        <Image
          src={src}
          alt={alt || ''}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 800px"
          loading="lazy"
        />
      </span>
      {alt && (
        <span className="block text-center text-sm mt-2 text-muted-foreground">
          {alt}
        </span>
      )}
    </span>
  );
}

function MDXLink(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { href, children, ...rest } = props;
  const isExternal = href?.startsWith('http');
  
  return (
    <Link
      href={href || '#'}
      className="text-emerald-500 hover:text-emerald-400 underline underline-offset-4 transition-colors"
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </Link>
  );
}

function MDXCode(props: React.HTMLAttributes<HTMLElement>) {
  const { children, className } = props;
  const isInline = !className;
  
  if (isInline) {
    return (
      <code className="px-1.5 py-0.5 rounded text-sm font-mono bg-muted text-emerald-500">
        {children}
      </code>
    );
  }
  
  return (
    <code className={className}>
      {children}
    </code>
  );
}

function MDXPre(props: React.HTMLAttributes<HTMLPreElement>) {
  const { children } = props;
  
  return (
    <pre className="p-4 rounded-lg overflow-x-auto my-6 text-sm bg-neutral-900 border border-neutral-800 text-gray-100">
      {children}
    </pre>
  );
}

function MDXBlockquote(props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) {
  const { children } = props;
  
  return (
    <blockquote className="border-l-4 border-emerald-500 pl-4 my-6 italic text-muted-foreground">
      {children}
    </blockquote>
  );
}

function MDXTable(props: React.TableHTMLAttributes<HTMLTableElement>) {
  const { children } = props;
  
  return (
    <div className="overflow-x-auto my-6">
      <table className="w-full text-left border-collapse">
        {children}
      </table>
    </div>
  );
}

function MDXTh(props: React.ThHTMLAttributes<HTMLTableCellElement>) {
  const { children } = props;
  
  return (
    <th className="border-b-2 border-border p-3 font-semibold bg-muted">
      {children}
    </th>
  );
}

function MDXTd(props: React.TdHTMLAttributes<HTMLTableCellElement>) {
  const { children } = props;
  
  return (
    <td className="border-b border-border p-3">
      {children}
    </td>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mdxComponents: any = {
  img: MDXImage,
  a: MDXLink,
  code: MDXCode,
  pre: MDXPre,
  blockquote: MDXBlockquote,
  table: MDXTable,
  th: MDXTh,
  td: MDXTd,
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-3xl font-bold mt-10 mb-4" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-2xl font-bold mt-8 mb-4" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-xl font-semibold mt-6 mb-3" {...props} />
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4 className="text-lg font-semibold mt-4 mb-2" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="my-4 leading-relaxed" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="my-4 ml-6 list-disc space-y-2" {...props} />
  ),
  ol: (props: React.OlHTMLAttributes<HTMLOListElement>) => (
    <ol className="my-4 ml-6 list-decimal space-y-2" {...props} />
  ),
  li: (props: React.LiHTMLAttributes<HTMLLIElement>) => (
    <li className="leading-relaxed" {...props} />
  ),
  hr: (props: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="my-8 border-t border-border" {...props} />
  ),
};
