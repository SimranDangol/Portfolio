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
      className="flex flex-col items-center gap-2 text-gray-300 transition-colors hover:text-white group"
    >
      <div className="flex items-center justify-center w-12 h-12 transition-colors border-2 border-gray-600 rounded-full group-hover:border-white">
        <ArrowUp size={20} />
      </div>
      <span className="text-sm">Scroll to Top</span>
    </button>
  );
};

export default ScrollToTopButton;
