import { Project } from "../../types";

export const projectData: Project[] = [
  {
    id: 1,
    title: "Agentic IT Support Assistant",
    description:
      "Agentic RAG-based IT support assistant built with Python and Next.js for answering internal IT helpdesk questions using a knowledge base.",
    image: "/agentic-rag.png",
    tech: ["Python", "Next.js", "LangChain", "RAG", "Pinecone", "TypeScript"],
    link: "https://agentic-rag-it-support-sandy.vercel.app/",
    github: "https://github.com/SimranDangol",
    category: "Agentic AI",
  },
  {
    id: 2,
    title: "Real-Time Voice Assistant",
    description:
      "A browser-based conversational AI system that converts speech into text, generates streamed AI responses, and speaks them back with low latency.",
    image: "/voice-assistant.png",
    tech: ["Next.js", "WebSocket", "Deepgram", "Groq / LLMs", "Node.js", "Web Audio API"],
    link: "https://real-time-voice-assistant-acno.vercel.app/",
    github: "https://github.com/SimranDangol",
    category: "Voice AI",
  },
  {
    id: 3,
    title: "Nepal Road Map Visualization",
    description:
      "An interactive geographic visualization tool mapping national highways, feeder roads, and urban road networks across Nepal with geospatial data.",
    image: "/Project9.png",
    tech: ["React", "Leaflet", "GeoJSON", "Tailwind CSS"],
    link: "https://np-road-map.vercel.app/",
    github: "https://github.com/SimranDangol",
    category: "Frontend",
  },
  {
    id: 4,
    title: "Recruitment & Job Portal",
    description:
      "End-to-end recruitment platform connecting job seekers and recruiters with applicant tracking, resume uploads, and custom filtering.",
    image: "/Project6.png",
    tech: ["React", "Express", "MongoDB", "Node.js", "Tailwind CSS"],
    link: "https://job-portal-7std.onrender.com",
    github: "https://github.com/SimranDangol",
    category: "Full Stack",
  },
];
