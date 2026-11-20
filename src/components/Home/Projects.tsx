"use client";

import { useState, useMemo } from "react";
import { projectData } from "@/utils/projectData";
import ProjectCard from "./ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import { Github } from "lucide-react";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = useMemo(() => ["All", "Full Stack", "Frontend"], []);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return projectData;
    return projectData.filter(
      (project) => project.category === selectedCategory
    );
  }, [selectedCategory]);

  return (
    <section
      id="projects"
      className="bg-zinc-950 border-t border-zinc-800 py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div>
          <p className="text-xs uppercase tracking-widest font-mono text-zinc-600">
            Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-50 mt-2">
            Selected Work
          </h2>
        </div>

        {/* Categories */}
        <div className="flex gap-6 mt-8 border-b border-zinc-800/80 pb-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`text-sm transition-colors focus:outline-none ${
                selectedCategory === category
                  ? "text-zinc-100 font-medium"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="h-full"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* More on GitHub */}
        <div className="mt-14 pt-8 border-t border-zinc-900 flex justify-center">
          <a
            href="https://github.com/SimranDangol"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <Github size={16} />
            <span>More projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
