"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider {...props} attribute="class" defaultTheme="dark" enableSystem={false}>
      <div className="min-h-screen bg-white text-zinc-900 dark:bg-white dark:bg-zinc-950 dark:text-zinc-100">
        {children}
      </div>
    </NextThemesProvider>
  );
}

