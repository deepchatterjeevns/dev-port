import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://deepchatterjee.com"),
  title: {
    default: "Deep Chatterjee | DevOps Engineer",
    template: "%s | Deep Chatterjee",
  },
  description: "DevOps Engineer with 8+ years of experience building scalable cloud infrastructure. AWS, GCP, Azure specialist.",
  keywords: ["DevOps", "Cloud Engineer", "AWS", "GCP", "Azure", "Kubernetes", "CI/CD", "Infrastructure"],
  authors: [{ name: "Deep Chatterjee" }],
  alternates: {
    canonical: "https://deepchatterjee.com",
  },
  openGraph: {
    title: "Deep Chatterjee | DevOps Engineer",
    description: "DevOps Engineer with 8+ years of experience building scalable cloud infrastructure. AWS, GCP, Azure specialist.",
    url: "https://deepchatterjee.com",
    siteName: "DevOpsbyDC",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Deep Chatterjee Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deep Chatterjee | DevOps Engineer",
    description: "DevOps Engineer with 8+ years of experience building scalable cloud infrastructure. AWS, GCP, Azure specialist.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} dark`} suppressHydrationWarning>
      <head>
        <link rel="alternate" type="application/rss+xml" title="DevOpsbyDC RSS Feed" href="https://deepchatterjee.com/rss.xml" />
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js" defer />
        {process.env.NEXT_PUBLIC_CF_BEACON_TOKEN && (
          <script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={`{"token": "${process.env.NEXT_PUBLIC_CF_BEACON_TOKEN}"}`}
          />
        )}
      </head>
      <body className={`${inter.className} antialiased min-h-screen`}>
        <ThemeProvider defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
