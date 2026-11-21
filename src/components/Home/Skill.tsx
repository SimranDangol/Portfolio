"use client";

import { motion } from "framer-motion";

interface SkillGroup {
  category: string;
  items: string[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "AI & Agentic Systems",
    items: [
      "LangGraph",
      "LangChain",
      "Multi-Agent Systems",
      "RAG",
      "Pinecone",
      "Tool Calling",
      "Prompt Engineering",
      "LLM APIs",
    ],
  },
  {
    category: "Full Stack Architecture",
    items: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "WebSockets",
      "Tailwind CSS",
      "Redux Toolkit",
      "TanStack Query",
    ],
  },
  {
    category: "Databases & DevOps",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Prisma ORM",
      "Redis",
      "Docker",
      "CI/CD",
    ],
  },
  {
    category: "Collaboration & Delivery",
    items: [
      "Ownership",
      "Communication",
      "Teamwork",
      "Problem Solving",
      "Adaptability",
      "Time Management",
      "Agile",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 pt-12 pb-14 sm:pt-16 sm:pb-16 px-6 sm:px-10"
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
            Capabilities
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mt-2">
            Technical Skills & Collaboration
          </h2>
        </motion.div>

        <div className="divide-y divide-zinc-200 dark:divide-zinc-800/80 border-t border-zinc-200 dark:border-zinc-800/80">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="py-5 sm:py-6 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-baseline"
            >
              <div className="md:col-span-3">
                <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-medium whitespace-nowrap">
                  {group.category}
                </span>
              </div>
              <div className="md:col-span-9 min-w-0">
                <p className="text-sm sm:text-[15px] text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans break-words">
                  {group.items.map((item, i) => (
                    <span key={item}>
                      <span className="text-zinc-800 dark:text-zinc-200 hover:text-zinc-950 dark:hover:text-white transition-colors">
                        {item}
                      </span>
                      {i < group.items.length - 1 && (
                        <span className="text-zinc-400 dark:text-zinc-600 mx-2.5 select-none font-mono text-xs">
                          &bull;
                        </span>
                      )}
                    </span>
                  ))}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
