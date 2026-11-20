"use client";

import { projectData } from "@/utils/projectData";
import ProjectCard from "./ProjectCard";
import { Github } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = projectData;

  return (
    <section
      id="projects"
      className="bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 pt-12 pb-12 sm:pt-16 sm:pb-14 px-6 sm:px-10"
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
            Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mt-2">
            Selected Work
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex justify-center"
        >
          <a
            href="https://github.com/SimranDangol"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-all hover:scale-105 active:scale-95"
          >
            <Github size={16} />
            <span>More projects on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
