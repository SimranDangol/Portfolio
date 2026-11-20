"use client";

import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { Project } from "../../../types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700/80 rounded-xl overflow-hidden transition-colors h-full flex flex-col">
      {/* Project Thumbnail */}
      <div className="relative h-48 w-full bg-zinc-950 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {project.category && (
          <span className="absolute top-3 left-3 font-mono text-xs text-zinc-300 bg-zinc-950/80 px-2 py-0.5 rounded border border-zinc-800">
            {project.category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-5 space-y-3">
        <h3 className="text-base font-semibold text-zinc-100">
          {project.title}
        </h3>

        <p className="text-sm text-zinc-400 leading-relaxed line-clamp-3 flex-grow">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs text-zinc-400 border border-zinc-800 px-2 py-0.5 rounded bg-zinc-950/60"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-auto pt-4 border-t border-zinc-800/60 flex items-center gap-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors inline-flex items-center gap-1 font-medium"
          >
            <span>Live Demo</span>
            <ArrowUpRight size={14} />
          </a>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors inline-flex items-center gap-1"
              aria-label={`GitHub source for ${project.title}`}
            >
              <Github size={14} />
              <span>Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
