"use client";

import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { Project } from "../../../types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group bg-zinc-50/70 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 hover:border-zinc-400 dark:hover:border-zinc-700/80 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:hover:shadow-zinc-900/50 h-full flex flex-col shadow-sm dark:shadow-none">
      <div className="relative h-48 w-full bg-zinc-100 dark:bg-zinc-950 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="flex flex-col flex-grow p-5 space-y-3">
        <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors">
          {project.title}
        </h3>

        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-3 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs text-zinc-700 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 px-2 py-0.5 rounded bg-white dark:bg-zinc-950/60 transition-colors hover:border-zinc-300 dark:hover:border-zinc-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center gap-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link text-sm text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors inline-flex items-center gap-1 font-medium"
          >
            <span>Live Demo</span>
            <ArrowUpRight size={14} className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </a>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group/code text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors inline-flex items-center gap-1"
              aria-label={`GitHub source for ${project.title}`}
            >
              <Github size={14} className="transition-transform duration-200 group-hover/code:scale-110" />
              <span>Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
