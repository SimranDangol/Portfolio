"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 pt-24 pb-12 sm:pt-32 sm:pb-16 px-4 sm:px-10"
    >
      <div className="max-w-5xl w-full mx-auto space-y-12">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-left space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-start sm:items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse flex-shrink-0" />
              <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-zinc-500 dark:text-zinc-400">
                FULL STACK DEVELOPER &mdash; KATHMANDU, NEPAL
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-5xl lg:text-[3.5rem] xl:text-[3.85rem] font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.12] sm:leading-[1.24]"
            >
              <span className="inline-block">I design and build</span>
              <br />
              <span className="inline-block">web products,</span>
              <br />
              <span className="inline-block">
                <span className="text-zinc-400 dark:text-zinc-500">from the</span> ground up.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed font-normal"
            >
              I work across the full stack and agentic workflows, and love
              taking full ownership of products from level 0 to production.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={() => {
                  const el = document.getElementById("projects");
                  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200 font-medium px-6 py-2.5 rounded-full text-sm transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm"
              >
                <span>See my work</span>
                <ArrowRight size={14} />
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: "smooth" });
                }}
                className="inline-flex items-center gap-1.5 border border-zinc-300 dark:border-zinc-700 bg-transparent dark:bg-zinc-900/50 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 hover:text-zinc-900 dark:hover:text-zinc-100 px-6 py-2.5 rounded-full text-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Get in touch</span>
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[280px] sm:max-w-[310px] group">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800/90 bg-zinc-100 dark:bg-zinc-900 shadow-xl ring-1 ring-black/5 dark:ring-white/5 transition-transform duration-500 ease-out group-hover:scale-[1.02]">
                <Image
                  src="/me.jpg"
                  alt="Simran Dangol"
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 310px"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-8 font-mono text-xs"
        >
          <div>
            <p className="text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-1.5">
              LANGUAGES
            </p>
            <p className="text-zinc-800 dark:text-zinc-300 font-sans text-sm">
              English (professional), Nepali (native)
            </p>
          </div>

          <div>
            <p className="text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-1.5">
              OPEN FOR
            </p>
            <p className="text-emerald-600 dark:text-emerald-400 font-sans text-sm flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Full-time remote engineering roles
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
