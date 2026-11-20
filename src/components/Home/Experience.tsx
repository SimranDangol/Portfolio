"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  date: string;
  current?: boolean;
  link?: string;
  details: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "PlayCV.ai",
    role: "Full Stack Developer",
    date: "Dec 2025 - Present",
    current: true,
    link: "https://playcv.ai",
    details: [
      "Architecting and scaling core features for an AI-powered career platform with Next.js, TypeScript, and modern full-stack workflows.",
      "Building high-performance interactive resume & portfolio builders with dynamic form workflows, real-time preview, and PDF rendering.",
      "Integrating AI services and LLM endpoints for intelligent content generation, automated CV parsing, and instant suggestions.",
      "Optimizing web performance, client-side caching, and API response times to ensure smooth user interactions.",
      "Collaborating closely with cross-functional teams to iterate on product features, onboarding UX, and analytics instrumentation.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS", "AI Integrations", "REST APIs"],
  },
  {
    company: "Infinity IT Solutions",
    role: "Full Stack Developer",
    date: "Dec 2023 - Nov 2025",
    current: false,
    details: [
      "Engineered and maintained production web applications using React.js and Next.js with modular, scalable component architectures.",
      "Implemented state management with Redux and React Query to handle complex client-side caching and asynchronous state.",
      "Collaborated on designing RESTful APIs and seamless data integration layers with backend services.",
      "Improved frontend performance through code splitting, image optimization, lazy loading, and core web vitals fine-tuning.",
      "Conducted code reviews, unit testing, and ensured strict cross-browser compatibility and web accessibility standards.",
    ],
    technologies: ["React.js", "Next.js", "TypeScript", "Redux", "Node.js", "Tailwind CSS", "REST APIs"],
  },
  {
    company: "Metalogic Software PVT. LTD",
    role: "Full Stack Developer Intern",
    date: "Sep 2023 - Dec 2023",
    current: false,
    details: [
      "Developed a scalable CMS platform with multilingual support and role-based access control (RBAC) using Next.js and Tailwind CSS.",
      "Built key modules for a Restaurant POS system featuring real-time table tracking, QR ordering, and live inventory management.",
      "Implemented Socket.IO for real-time order notifications and instant table status synchronizations.",
      "Designed interactive analytics dashboards with Chart.js and optimized database queries with MongoDB indexing.",
      "Worked in Agile/Scrum sprints utilizing Git for collaborative version control and deployment pipelines.",
    ],
    technologies: ["React.js", "Next.js", "Node.js", "MongoDB", "Express", "Socket.IO", "JWT Authentication", "Git"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-zinc-950 border-t border-zinc-800 py-24 px-6"
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p className="text-xs uppercase tracking-widest font-mono text-zinc-600">
            Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-50 mt-2">
            Work History
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-zinc-800 pl-8 space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="relative"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              {/* Timeline dot */}
              <span
                className={`absolute -left-[33px] top-1.5 w-3 h-3 rounded-full border bg-zinc-900 ${
                  exp.current ? "border-emerald-700" : "border-zinc-700"
                }`}
              />

              {/* Company + link */}
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-lg font-semibold text-zinc-50">
                  {exp.company}
                </h3>
                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-600 hover:text-zinc-400 transition-colors"
                    aria-label={`Visit ${exp.company}`}
                  >
                    <ExternalLink size={13} />
                  </a>
                )}
              </div>

              {/* Role */}
              <p className="text-sm text-zinc-400 mt-0.5">{exp.role}</p>

              {/* Date */}
              <p className="font-mono text-xs text-zinc-600 mt-1">
                {exp.current && (
                  <span className="text-emerald-500 mr-2">current</span>
                )}
                {exp.date}
              </p>

              {/* Bullets */}
              <ul className="mt-4 space-y-2">
                {exp.details.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-zinc-700 mt-2 flex-shrink-0" />
                    <span className="text-sm text-zinc-400 leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Tech tags */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs text-zinc-500 border border-zinc-800 rounded px-2 py-0.5 bg-zinc-900"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
