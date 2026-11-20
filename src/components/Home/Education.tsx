"use client";

import { motion } from "framer-motion";

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
}

const educationList: EducationItem[] = [
  {
    degree: "Bachelor of Computer Science & Software Engineering",
    institution: "Patan College for Professional Studies",
    location: "Kupondole, Lalitpur",
    period: "Oct 2022 - Jun 2025",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 pt-12 pb-14 sm:pt-14 sm:pb-16 px-6 sm:px-10"
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
            Education
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mt-2">
            Academic Background
          </h2>
        </motion.div>

        <div className="space-y-4 max-w-3xl">
          {educationList.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 rounded-xl p-5 sm:p-6 hover:border-zinc-300 dark:hover:border-zinc-700/80 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 shadow-xs dark:shadow-none"
            >
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {item.degree}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-0.5">
                  {item.institution}
                </p>
              </div>
              <div className="flex flex-col items-end gap-1.5 shrink-0">
                <span className="font-mono text-xs text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-3 py-1 rounded-full font-medium">
                  {item.period}
                </span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono text-right">
                  {item.location}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
