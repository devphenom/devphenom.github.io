import type { Metadata } from "next";
import { DM_Sans, DM_Mono, Syne } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

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
  title: "Abdulsamad Ali — Fullstack Engineer",
  description:
    "Portfolio of Abdulsamad Ali (devphenom), a frontend-heavy fullstack engineer building web and mobile products with React, Next.js, and React Native.",
};

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
