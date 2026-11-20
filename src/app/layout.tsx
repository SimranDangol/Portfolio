import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Providers from "@/components/shared/Provider";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/shared/ThemeProvider";

export const metadata: Metadata = {
  title: "Simran Dangol",
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className="font-sans antialiased bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 selection:bg-zinc-200 dark:selection:bg-zinc-800 selection:text-zinc-900 dark:selection:text-zinc-100"
      >
        <ThemeProvider>
          <Providers>
            <Navbar />
            {children}
            <Toaster richColors position="top-right" />
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
