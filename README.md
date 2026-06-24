# Deep Chatterjee — Portfolio

Personal portfolio built with **Next.js 14** + **TypeScript** + **Tailwind CSS**.

Static export for Cloudflare Pages / Netlify / Vercel.

## Features

- 🌓 Dark/Light theme toggle
- 📱 Fully responsive design
- 🎯 Scroll-spy navigation highlighting
- 📄 PDF resume hosting (`/resume.pdf`)
- 🏆 Certifications showcase
- 📬 Contact section
- 🔍 SEO optimized (sitemap, robots, OG tags)

## Tech Stack

- **Framework**: Next.js 14 (Static Export)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Theme**: Dark/Light with next-themes

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with SEO metadata
│   ├── page.tsx        # Homepage
│   ├── projects/       # Projects listing
│   ├── resume/         # Resume page
│   ├── sitemap.ts      # Auto-generated sitemap
│   └── robots.ts       # Robots.txt config
├── components/         # React components
├── lib/
│   └── data/
│       └── projects.ts # Projects data (edit to add projects)
└── public/
    ├── og-image.png    # OpenGraph image (1200x630)
    ├── resume.pdf      # Your resume PDF
    └── favicon.svg
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production (static export)
npm run build
```

Build output goes to `/out` folder.

## Customization

### Adding Projects

Edit `lib/data/projects.ts`:

```ts
export const projects: Project[] = [
  {
    slug: "my-project",
    title: "My New Project",
    summary: "Description of the project.",
    tech: ["AWS", "Terraform", "Kubernetes"],
    repoUrl: "https://github.com/you/repo",
    blogUrl: "https://blog.com/post",
    highlights: ["Feature 1", "Feature 2"],
  },
  // ... more projects
];
```

### Update Personal Info

- **Hero**: `components/hero.tsx`
- **Contact**: `components/contact-section.tsx`
- **Certifications**: `components/certifications-section.tsx`
- **Resume**: `app/resume/page.tsx`

### Update Domain

Replace `deepchatterjee.com` in:
- `app/layout.tsx` (metadataBase, canonical, OG URLs)
- `app/sitemap.ts`
- `app/robots.ts`

### Add Resume PDF

Place your resume at `public/resume.pdf`.

### Add OG Image

Create a 1200x630 image and save as `public/og-image.png`.

## Deploy Checklist

### Before Deploying

1. **Update `package.json`** - Remove Prisma and unused dependencies
2. **Update `next.config.js`** - Set `output: "export"`
3. **Delete unnecessary files**:
   - `prisma/` folder
   - `lib/db.ts`
   - `.env`
   - `.yarn/` folder
   - `yarn.lock`
   - `.yarnrc.yml`

### Cloudflare Pages

1. Push to GitHub
2. Connect repo to Cloudflare Pages
3. Build settings:
   - **Build command**: `npm run build`
   - **Output directory**: `out`
   - **Node version**: 18
4. Add custom domain (optional)

### Netlify

1. Push to GitHub
2. Connect repo to Netlify
3. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `out`

### Vercel

1. Push to GitHub
2. Import project
3. Deploy (auto-detected)

## URLs After Deploy

- Homepage: `https://deepchatterjee.com/`
- Projects: `https://deepchatterjee.com/projects/`
- Resume page: `https://deepchatterjee.com/resume/`
- Resume PDF: `https://deepchatterjee.com/resume.pdf`
- Sitemap: `https://deepchatterjee.com/sitemap.xml`

## License

MIT
