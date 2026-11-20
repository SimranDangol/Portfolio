"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-200/80 dark:border-zinc-800/80 py-28 px-6"
    >
      <div className="max-w-5xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-5 flex flex-col items-start">
          <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 shadow-2xl">
            <Image
              src="/me.jpg"
              alt="Simran Dangol"
              fill
              className="object-cover object-center filter grayscale contrast-[1.05] hover:grayscale-0 transition-all duration-500"
              sizes="(max-width: 1024px) 100vw, 400px"
              priority
            />
          </div>
          <div className="mt-3 flex items-center justify-between w-full max-w-sm px-1 text-xs font-mono text-zinc-500">
            <span>SIMRAN DANGOL</span>
            <span className="flex items-center gap-1.5 text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Kathmandu, Nepal
            </span>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-8 text-left">
          <div>
            <p className="text-xs uppercase tracking-widest font-mono text-zinc-500">
              About &mdash; Philosophy
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-zinc-900 dark:text-zinc-50 mt-2 leading-tight">
              Driven by craft, <br />
              obsessed with execution.
            </h2>
          </div>

          <div className="space-y-4 text-zinc-400 text-base sm:text-lg leading-relaxed font-normal">
            <p>
              I don&apos;t just write code &mdash; I care deeply about how a product
              actually feels in people&apos;s hands. I love taking complex, messy
              problems and turning them into fast, reliable systems that feel effortless
              to use.
            </p>
            <p>
              Currently, I engineer full-stack platforms and autonomous agentic
              workflows at{" "}
              <a
                href="https://playcv.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-900 dark:text-zinc-100 hover:text-white underline underline-offset-4 decoration-zinc-700 hover:decoration-zinc-400 font-medium inline-flex items-center gap-0.5"
              >
                PlayCV.ai
                <ArrowUpRight size={14} className="text-zinc-500" />
              </a>
              . Whether it&apos;s architecting server actions, tuning database
              queries, or wiring up LLM agent loops, I take full ownership from
              first commit to production.
            </p>
            <p className="text-zinc-400 text-base">
              My mindset is simple: stay curious, hold high standards, and ship
              software that stands out.
            </p>
          </div>

          <div className="pt-6 border-t border-zinc-200 dark:border-zinc-200/80 dark:border-zinc-800/80 grid grid-cols-1 sm:grid-cols-2 gap-6 font-mono text-xs">
            <div>
              <p className="text-zinc-500 uppercase tracking-widest mb-1.5">
                ROLE
              </p>
              <p className="text-zinc-200 font-sans text-sm">
                Full Stack Developer @ PlayCV.ai
              </p>
            </div>

            <div>
              <p className="text-zinc-500 uppercase tracking-widest mb-1.5">
                FOCUS
              </p>
              <p className="text-zinc-200 font-sans text-sm">
                Modern Web &amp; Agentic Workflows
              </p>
            </div>

            <div>
              <p className="text-zinc-500 uppercase tracking-widest mb-1.5">
                LANGUAGES
              </p>
              <p className="text-zinc-200 font-sans text-sm">
                English (fluent), Nepali (native)
              </p>
            </div>

            <div>
              <p className="text-zinc-500 uppercase tracking-widest mb-1.5">
                OPEN FOR
              </p>
              <p className="text-emerald-400 font-sans text-sm flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Full-time remote engineering roles
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}


