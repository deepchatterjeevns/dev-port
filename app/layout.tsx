import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://deepchatterjee.com"),
  title: {
    default: "Deep Chatterjee — DevOps & Cloud Engineer",
    template: "%s | Deep Chatterjee",
  },
  description:
    "Portfolio of Deep Chatterjee: DevOps, Kubernetes, AWS/GCP, Terraform, CI/CD. Projects, certifications, and contact.",
  keywords: [
    "DevOps",
    "Cloud Engineer",
    "AWS",
    "GCP",
    "Azure",
    "Kubernetes",
    "CI/CD",
    "Terraform",
    "Infrastructure as Code",
  ],
  authors: [{ name: "Deep Chatterjee" }],
  alternates: {
    canonical: "https://deepchatterjee.com",
  },
  openGraph: {
    type: "website",
    url: "https://deepchatterjee.com",
    title: "Deep Chatterjee — DevOps & Cloud Engineer",
    description:
      "Projects, certifications, and DevOps/Cloud engineering work by Deep Chatterjee.",
    siteName: "Deep Chatterjee",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Deep Chatterjee Portfolio",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deep Chatterjee — DevOps & Cloud Engineer",
    description:
      "Projects, certifications, and DevOps/Cloud engineering work by Deep Chatterjee.",
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen">
        <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
      </body>
    </html>
  );
}
