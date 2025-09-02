"use client";

import React from "react";
import ScrollToTopButton from "../shared/ScrollToTopButton";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative py-6 text-sm text-center text-gray-600 dark:text-gray-400">
      <div className="flex flex-col items-center gap-4">
        <ScrollToTopButton />
        <p>© {year} Simran Dangol. Crafted with passion and lots of ☕</p>
      </div>
    </footer>
  );
};

export default Footer;
