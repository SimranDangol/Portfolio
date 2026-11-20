"use client";

import React from "react";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-950 py-10 px-6">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-4 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
        <p>© {new Date().getFullYear()} Simran Dangol. All rights reserved.</p>

        <div className="flex items-center gap-5 ml-auto">
          <a
            href="https://github.com/SimranDangol"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-200 transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/simran-dangol"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-200 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}


