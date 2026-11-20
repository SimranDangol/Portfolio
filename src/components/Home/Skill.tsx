"use client";

import { motion } from "framer-motion";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js (App Router)", "TypeScript", "Tailwind CSS", "Redux Toolkit", "React Query", "Zustand", "Framer Motion", "HTML5 / CSS3"],
  },
  {
    title: "Backend & APIs",
    skills: ["Node.js", "Express.js", "RESTful APIs", "Socket.IO", "Server Actions", "JWT & Auth Systems", "AI / LLM Integrations", "Microservices"],
  },
  {
    title: "Databases & ORMs",
    skills: ["PostgreSQL", "MongoDB", "Prisma ORM", "Mongoose", "Redis Caching", "Database Modeling", "Query Optimization"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Git & GitHub", "Docker", "Vercel", "Render", "CI/CD Basics", "Postman", "Linux / Bash"],
  },
  {
    title: "Engineering",
    skills: ["System Design", "Component Architecture", "Performance (Core Web Vitals)", "SEO & Accessibility", "Unit & Integration Testing", "Code Reviews"],
  },
  {
    title: "Collaboration",
    skills: ["Agile & Scrum", "Cross-functional Teamwork", "Product-driven Execution", "Technical Problem Solving", "Clear Documentation"],
  },
];

export default function SkillsSection() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-zinc-950 border-t border-zinc-800 py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest font-mono text-zinc-600">
            Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-50 mt-2">
            Technical Stack
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
          {skillCategories.map((cat) => (
            <div key={cat.title}>
              <p className="text-xs uppercase tracking-widest font-mono text-zinc-600 mb-3">
                {cat.title}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm text-zinc-300 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 px-3 py-1 rounded-md transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
