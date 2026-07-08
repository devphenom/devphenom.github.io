import type { Metadata, Viewport } from "next";
import { DM_Sans, DM_Mono, Syne } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { JsonLd } from "@/components/json-ld";
import { profile, site } from "@/lib/constants";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const gatwick = localFont({
  src: [
    {
      path: "./fonts/PPGatwick-Ultralight.woff",
      weight: "200",
      style: "normal",
    },
    { path: "./fonts/PPGatwick-Bold.woff", weight: "700", style: "normal" },
  ],
  variable: "--font-gatwick",
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: "%s · Abdulsamad Ali",
  },
  description: site.description,
  keywords: [...site.keywords],
  applicationName: site.title,
  authors: [{ name: profile.name, url: site.url }],
  creator: profile.name,
  publisher: profile.name,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.title,
    title: site.title,
    description: site.description,
    locale: site.locale,
    // og:image tags are supplied by app/opengraph-image.tsx (file convention).
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    creator: site.twitterHandle,
    site: site.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/icon", type: "image/png" }],
    shortcut: "/favicon.ico",
    apple: "/apple-icon",
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: profile.name,
    statusBarStyle: "black-translucent",
  },
  formatDetection: { telephone: false },
  ...(site.verification.google
    ? { verification: { google: site.verification.google } }
    : {}),
};

export function generateViewport(): Viewport {
  return {
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: "#ffffff" },
      { media: "(prefers-color-scheme: dark)", color: "#09090b" },
    ],
    colorScheme: "dark light",
    width: "device-width",
    initialScale: 1,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${dmSans.variable} ${dmMono.variable} ${gatwick.variable} ${syne.variable} h-full antialiased`}
    >
      <head>
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
