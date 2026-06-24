import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(10 10 10)',
        foreground: 'rgb(229 229 229)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      typography: {
        invert: {
          css: {
            '--tw-prose-body': 'rgb(212 212 212)',
            '--tw-prose-headings': 'rgb(255 255 255)',
            '--tw-prose-links': 'rgb(255 255 255)',
            '--tw-prose-bold': 'rgb(255 255 255)',
            '--tw-prose-code': 'rgb(212 212 212)',
            '--tw-prose-pre-bg': 'rgb(23 23 23)',
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
