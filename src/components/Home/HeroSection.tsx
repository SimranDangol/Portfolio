"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, ArrowRight, ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col justify-center pt-28 pb-20 px-6"
    >
      <div className="max-w-5xl w-full mx-auto text-left">
        {/* Top meta badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse flex-shrink-0" />
          <span className="font-mono text-xs tracking-widest uppercase text-zinc-400">
            FULL STACK DEVELOPER &mdash; KATHMANDU, NEPAL
          </span>
        </motion.div>

        {/* Big Bold Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-zinc-50 leading-[1.06]"
        >
          I design and build <br />
          web products, <br />
          <span className="text-zinc-500">from the</span> ground up.
        </motion.h1>

        {/* Sub-description */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="mt-8 space-y-2 text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed font-normal"
        >
          <p>
            I work across the whole stack &mdash; and love taking full ownership
            of the product from level 0.
          </p>
          <p className="text-sm sm:text-base text-zinc-400 flex items-center flex-wrap gap-1.5 pt-1">
            <span>Currently engineering full-stack web products and AI systems at</span>
            <a
              href="https://playcv.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-100 hover:text-white underline underline-offset-4 decoration-zinc-700 hover:decoration-zinc-400 transition-colors inline-flex items-center gap-0.5 font-medium"
            >
              PlayCV.ai
              <ArrowUpRight size={14} className="text-zinc-500" />
            </a>
          </p>
        </motion.div>

        {/* Action buttons & socials */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-zinc-100 text-zinc-950 hover:bg-zinc-300 font-medium px-5 py-2.5 rounded-md text-sm transition-colors"
          >
            <span>See my work</span>
            <ArrowRight size={14} />
          </a>

          <a
            href="/Simran_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 border border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-zinc-600 px-5 py-2.5 rounded-md text-sm transition-colors"
          >
            <span>Resume</span>
          </a>

          <div className="flex items-center gap-3 ml-2 pl-3 border-l border-zinc-800">
            <a
              href="https://github.com/SimranDangol"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-zinc-500 hover:text-zinc-200 transition-colors p-1"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/simran-dangol"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-zinc-500 hover:text-zinc-200 transition-colors p-1"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
