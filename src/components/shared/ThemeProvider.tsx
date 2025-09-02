"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider {...props} attribute="class">
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900">
        {children}
      </div>
    </NextThemesProvider>
  );
}
