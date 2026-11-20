"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, ArrowRight } from "lucide-react";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

export default function HeroSection() {
  return (
    <div
      id="home"
      className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center px-6 text-center"
    >
      <div className="max-w-2xl w-full space-y-6">
        {/* Status */}
        <motion.div {...fade(0)} className="flex justify-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
            Available for work
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          {...fade(0.08)}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-zinc-50"
        >
          Simran Dangol
        </motion.h1>

        {/* Role */}
        <motion.p
          {...fade(0.14)}
          className="text-lg sm:text-xl text-zinc-400 font-normal"
        >
          Full Stack Developer &amp; AI Systems Engineer
        </motion.p>

        {/* Bio */}
        <motion.p
          {...fade(0.2)}
          className="text-zinc-500 text-base leading-relaxed max-w-lg mx-auto"
        >
          I build high-performance web applications and AI-driven platforms.
          Currently at PlayCV.ai — focused on scalable architecture, real-time
          systems, and clean engineering.
        </motion.p>

        {/* Buttons */}
        <motion.div
          {...fade(0.26)}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="/Simran_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-50 text-zinc-950 hover:bg-zinc-200 font-medium px-5 py-2.5 rounded-md text-sm transition-colors"
          >
            View Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 border border-zinc-700 text-zinc-400 hover:text-zinc-100 hover:border-zinc-500 px-5 py-2.5 rounded-md text-sm transition-colors"
          >
            Get in Touch <ArrowRight size={14} />
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div
          {...fade(0.32)}
          className="flex items-center justify-center gap-4 pt-2"
        >
          <a
            href="https://github.com/SimranDangol"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-zinc-600 hover:text-zinc-300 transition-colors p-1"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/simran-dangol"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-zinc-600 hover:text-zinc-300 transition-colors p-1"
          >
            <Linkedin size={20} />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
