/* eslint-disable no-unused-vars */

import React from "react";
import blog from "../assets/blog.png";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const projectJson = [
    {
      title: "AI-Powered Blog",
      description:
        "A platform to create, read, update, and delete blogs with user authentication and responsive design.",
      image: blog,
      live: "https://blog-1-3.onrender.com/",
      github: "https://github.com/SimranDangol/Blog-1",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Shadcn ui"],
    },
  ];

  return (
    <section id="projects" className="relative px-4 py-10 bg-gray-700">
      <div className="mx-auto mb-16 max-w-7xl">
        <h2 className="pb-4 mb-8 text-3xl font-bold text-white border-b border-red-500 w-max">
          My Projects
        </h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
          {projectJson.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden transition-transform transform bg-gray-800 rounded-lg shadow-lg hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-48"
              />
              <div className="p-6">
                <h3 className="mb-2 text-2xl font-semibold text-gray-300">
                  {item.title}
                </h3>
                <p className="mb-4 text-gray-300">{item.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.techStack.map((tech, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-1 text-sm font-medium text-gray-300 bg-gray-900 rounded-full"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={item.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 text-white transition-colors bg-blue-500 rounded-lg shadow-md hover:bg-blue-600"
                  >
                    View Project
                  </a>
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-2 text-white transition-colors bg-gray-800 rounded-lg shadow-md hover:bg-gray-900"
                  >
                    <FaGithub /> Github
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
