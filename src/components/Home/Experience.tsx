"use client";

import { motion } from "framer-motion";

interface ExperienceItem {
  company: string;
  role: string;
  date: string;
  current?: boolean;
  details: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "PlayCV.ai",
    role: "Full Stack Developer",
    date: "Dec 2025 - Present",
    current: true,
    details: [
      "Architected and built a multi-tenant AI SaaS platform serving individual users and organizations.",
      "Developed real-time AI simulations and conversational agents using voice streaming, avatars, and WebSockets.",
      "Integrated subscription billing, payment workflows, usage quotas, and account management.",
      "Implemented automated scoring engines and dynamic report generation for user performance analytics.",
      "Wrote unit and integration test suites with Vitest to maintain high reliability across critical business flows.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "OpenAI",
      "WebSocket",
      "Vitest",
    ],
  },
  {
    company: "Infinity IT Solutions",
    role: "Full Stack Developer",
    date: "Dec 2023 - Nov 2025",
    current: false,
    details: [
      "Engineered responsive, production-ready web applications using Next.js, React, and TypeScript with reusable component architectures.",
      "Designed efficient client-side caching and state synchronization using React Query and Redux Toolkit, reducing redundant network requests.",
      "Implemented secure JWT authentication, role-based access control (RBAC), and RESTful API integrations with Node.js backends.",
      "Optimized frontend performance and Core Web Vitals through dynamic code-splitting, lazy loading, and asset optimization.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Node.js",
      "Redux Toolkit",
      "Tailwind CSS",
    ],
  },
  {
    company: "Metalogic Software PVT. LTD",
    role: "Full Stack Developer Intern",
    date: "Sep 2023 - Dec 2023",
    current: false,
    details: [
      "Built responsive CMS modules featuring multilingual localization and role-based access control (RBAC) using React.",
      "Engineered core modules for a Restaurant POS system, including live table management and dynamic QR-ordering workflows.",
      "Implemented Socket.IO WebSockets for real-time kitchen order alerts and instant status synchronization across devices.",
      "Constructed interactive data dashboards with Chart.js and optimized database response times using MongoDB indexing.",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "Chart.js",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 pt-12 pb-20 sm:pt-16 sm:pb-24 px-6 sm:px-10"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-10"
        >
          <p className="text-xs uppercase tracking-widest font-mono text-zinc-500 dark:text-zinc-400">
            Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mt-2">
            Work History
          </h2>
        </motion.div>

        <div className="relative border-l border-zinc-200 dark:border-zinc-800 pl-8 space-y-12 max-w-3xl">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <span
                className={`absolute -left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border ${
                  exp.current
                    ? "border-emerald-400 bg-emerald-500 ring-4 ring-emerald-500/20"
                    : "border-zinc-400 bg-zinc-200 dark:border-zinc-500 dark:bg-zinc-800"
                }`}
              />

              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                {exp.company}
              </h3>

              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-0.5">{exp.role}</p>

              <p className="font-mono text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                {exp.date}
              </p>

              <ul className="mt-4 space-y-2">
                {exp.details.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500 mt-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-zinc-700 dark:text-zinc-300 font-mono bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-700 px-2.5 py-1 rounded-full transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
