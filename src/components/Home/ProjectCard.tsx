"use client";

import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="w-full h-full">
      <Card className="flex flex-col h-full overflow-hidden transition-shadow duration-300 border border-gray-200 shadow-md hover:shadow-xl rounded-2xl bg-gradient-to-tr from-white/80 to-gray-50 dark:from-gray-800/80 dark:to-gray-900/70 backdrop-blur-sm dark:border-gray-700">
        <div className="relative w-full overflow-hidden h-52 sm:h-60 md:h-64 group rounded-t-2xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-black/40 to-transparent group-hover:opacity-50" />
        </div>

        <CardContent className="flex flex-col flex-grow p-4">
          <CardHeader className="p-0 mb-2">
            <CardTitle className="text-lg font-bold text-gray-800 sm:text-xl dark:text-gray-100 line-clamp-1">
              {project.title}
            </CardTitle>
          </CardHeader>

          <p className="flex-grow mb-3 text-sm text-gray-600 sm:text-base dark:text-gray-300 line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-3">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs font-medium text-gray-700 border border-gray-300 rounded-md dark:text-gray-200 dark:border-gray-600 sm:text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 mt-auto font-semibold text-blue-600 transition-all sm:gap-2 dark:text-blue-400 hover:underline"
          >
            View Project <FaExternalLinkAlt size={14} />
          </a>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectCard;
