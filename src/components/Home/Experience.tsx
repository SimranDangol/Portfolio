"use client";

const experiences = [
  {
    company: "Metalogic Software PVT.LTD, KATHMANDU",
    role: "Full Stack Developer(MERN)",
    date: "Feb 2025 - August 2025",
    details: [
      "Developed a scalable CMS Platform with multilingual support and role-based access control using Next.js and Tailwind CSS",
      "Developed a Restaurant POS System with real-time tracking, QR-based table management, and online ordering",
      "Implemented Socket.IO for live notifications and real-time order/table status updates",
      "Created detailed analytics dashboards providing sales insights and inventory reporting",
      "Enhanced performance through database indexing and query optimization in MongoDB",
      "Worked in agile teams utilizing Git for version control and collaborative development",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "Node.js",
      "MongoDB",
      "Express",
      "Socket.IO",
      "JWT Authentication",
      "Role-Based Access Control",
      "Chart.js",
      "Git",
    ],
    link: "#",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen px-6 py-16 text-white bg-slate-900"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-blue-400">
            Professional Experience
          </h2>
          <div className="w-16 h-1 mx-auto bg-blue-500 rounded"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="p-6 transition-colors duration-300 border rounded-lg bg-slate-800 border-slate-700 hover:border-blue-500/50"
            >
              <div className="flex flex-col gap-4 mb-6 lg:flex-row lg:justify-between lg:items-start">
                <div>
                  <h3 className="mb-1 text-xl font-bold text-white">
                    {exp.company}
                  </h3>
                  <p className="font-semibold text-purple-400">{exp.role}</p>
                </div>
                <span className="px-3 py-1 text-sm font-medium text-green-400 border rounded-full bg-green-500/10 border-green-500/20">
                  {exp.date}
                </span>
              </div>

              <ul className="mb-6 space-y-3">
                {exp.details.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="flex-shrink-0 mt-1 mr-3 text-blue-400">
                      •
                    </span>
                    <span className="leading-relaxed text-gray-300">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-slate-700">
                <h4 className="mb-3 text-sm font-semibold tracking-wide text-gray-400 uppercase">
                  Technologies & Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs text-blue-300 border rounded-full bg-slate-700 border-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
