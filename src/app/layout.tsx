import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Providers from "@/components/shared/Provider";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/shared/ThemeProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Simran Dangol | Full Stack Developer",
  description:
    "Portfolio of Simran Dangol - Full Stack Developer & AI Systems Engineer at PlayCV.ai. Specializing in Next.js, React, TypeScript, Node.js, and scalable web architectures.",
  keywords: [
    "Simran Dangol",
    "Full Stack Developer",
    "Software Engineer",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "PlayCV.ai",
    "Portfolio",
  ],
  authors: [{ name: "Simran Dangol" }],
  openGraph: {
    title: "Simran Dangol | Full Stack Developer",
    description:
      "Full Stack Developer & AI Systems Engineer at PlayCV.ai building high-performance web systems and AI applications with Next.js, TypeScript, and Node.js.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-zinc-950 text-zinc-100 selection:bg-zinc-800 selection:text-zinc-100`}
      >
        <ThemeProvider>
          <Providers>
            <Navbar />
            {children}
            <Toaster richColors position="top-right" theme="dark" />
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
