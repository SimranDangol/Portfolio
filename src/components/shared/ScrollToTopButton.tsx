"use client";

import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-500 hover:text-zinc-200 transition-colors"
      aria-label="Scroll to top"
    >
      <ArrowUp size={14} />
      <span>Top</span>
    </button>
  );
};

export default ScrollToTopButton;

