import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#06050a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Orbit — Modern B2B SaaS Growth Platform Showcase",
  description:
    "Accelerate your engineering and product growth with Orbit. Autonomous analytics, real-time metrics, and workflow automation in one unified platform concept.",
  icons: {
    icon: [
      { url: "/favicon.ico?v=2" },
      { url: "/favicon-32x32.png?v=2", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png?v=2", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico?v=2",
    apple: "/apple-touch-icon.png?v=2",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Orbit — Modern B2B SaaS Platform Showcase",
    description: "Accelerate your product growth with unified analytics & workflow automation.",
    url: "https://orbit-saas-platform.vercel.app",
    siteName: "Orbit SaaS",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-[#06050a] text-gray-100 antialiased selection:bg-purple-500/30 selection:text-purple-200`}>
        {children}
      </body>
    </html>
  );
}
