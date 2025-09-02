"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Code, Layers, Database, Wrench, Cpu, Users } from "lucide-react";

type SkillCategory = {
  title: string;
  skills: string[];
  icon: JSX.Element;
  color: string;
};

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript"],
    icon: <Code className="w-6 h-6" />,
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "Tailwind CSS",
      "Redux",
      "React Query",
      "React Hook Form",
    ],
    icon: <Layers className="w-6 h-6" />,
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB"],
    icon: <Database className="w-6 h-6" />,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "Docker", "VS Code", "Prisma", "REST APIs"],
    icon: <Wrench className="w-6 h-6" />,
    color: "from-yellow-500 to-amber-500",
  },
  {
    title: "Technical Skills",
    skills: [
      "Problem Solving",
      "System Design",
      "Debugging",
      "API Development",
      "Database Modeling",
    ],
    icon: <Cpu className="w-6 h-6" />,
    color: "from-purple-500 to-violet-500",
  },
  {
    title: "Soft Skills",
    skills: [
      "Team Collaboration",
      "Problem Solving",
      "Communication",
      "Adaptability",
      "Leadership",
      "Time Management",
    ],
    icon: <Users className="w-6 h-6" />,
    color: "from-blue-500 to-indigo-500",
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950"
    >
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            Skills & Technologies
          </h2>
          <div className="relative max-w-2xl mx-auto mt-4">
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-70 mt-2"></div>
          </div>
        </motion.div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8 }}
              className="h-full"
            >
              <Card className="h-full overflow-hidden transition-all duration-300 bg-white border-0 shadow-lg dark:shadow-gray-800/20 group hover:shadow-xl rounded-2xl dark:bg-gray-800">
                <CardHeader className="relative pb-3 pt-7">
                  <div className="absolute inset-0 overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r opacity-5 ${category.color} group-hover:opacity-10 transition-opacity duration-300`}
                    ></div>
                  </div>
                  <div className="relative z-10 flex flex-col items-center gap-3">
                    <div
                      className={`p-3 rounded-2xl bg-gradient-to-r ${category.color} shadow-md`}
                    >
                      {category.icon}
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pb-6">
                  <div className="flex flex-wrap justify-center gap-3 mt-2">
                    {category.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-200 bg-gray-100 rounded-lg cursor-default dark:bg-gray-700 dark:text-gray-200 hover:shadow-sm"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
