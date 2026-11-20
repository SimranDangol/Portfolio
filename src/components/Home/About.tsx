"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  { value: "2+", label: "Years Exp." },
  { value: "PlayCV.ai", label: "Current Role" },
  { value: "Full Stack", label: "Specialty" },
  { value: "3+", label: "Companies" },
];

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-zinc-950 border-t border-zinc-800 py-24 px-6"
    >
      <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-14 items-center">
        {/* Image */}
        <div className="lg:col-span-2 flex justify-center lg:justify-start">
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-xl overflow-hidden border border-zinc-800">
            <Image
              src="/me.jpg"
              alt="Simran Dangol"
              fill
              className="object-cover"
              sizes="256px"
              priority
            />
          </div>
        </div>

        {/* Text */}
        <div className="lg:col-span-3 space-y-6">
          <div>
            <p className="text-xs uppercase tracking-widest font-mono text-zinc-600">
              About
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-50 mt-2">
              Building systems that matter
            </h2>
          </div>

          <div className="space-y-4 text-zinc-400 text-base leading-relaxed">
            <p>
              I&apos;m a Full Stack Developer currently building AI-driven career
              tools at PlayCV.ai. With 2+ years of professional engineering
              experience, I focus on building end-to-end web applications — from
              performant UIs to reliable backend systems.
            </p>
            <p>
              My work spans interactive SaaS platforms, real-time systems, LLM
              integrations, and RESTful APIs. I care deeply about code quality,
              system architecture, and shipping software that actually works at
              scale.
            </p>
            <p>
              When I&apos;m not in an editor, I&apos;m thinking about developer
              experience, state management patterns, and how AI tooling is
              changing the way software gets built.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {stats.map((s) => (
              <div
                key={s.label}
                className="p-4 border border-zinc-800 rounded-lg text-center bg-zinc-900/40"
              >
                <p className="text-base font-bold text-zinc-50">{s.value}</p>
                <p className="text-xs text-zinc-500 font-mono uppercase tracking-wide mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
