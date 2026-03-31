import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Tilt3D from "./Tilt3D";

const featuredProjects = [
  {
    id: 1,
    title: "Promo Sensei",
    description: "A powerful Slack bot that scrapes and summarizes the latest promotional offers from top brands using Playwright, OpenAI, and ChromaDB. Features slash commands for searching offers, getting summaries, filtering by brand, and refreshing data with real-time web scraping and vector-based document retrieval.",
    icon: "PS",
    iconBg: "bg-gradient-to-br from-orange-500 to-orange-700",
    keyAchievements: [
      { text: "Real-time web scraping", color: "bg-orange-800/50 border-orange-400/50" },
      { text: "AI-powered summarization", color: "bg-orange-800/50 border-orange-400/50" },
      { text: "Vector-based retrieval", color: "bg-orange-800/50 border-orange-400/50" },
      { text: "Slack integration", color: "bg-orange-800/50 border-orange-400/50" },
    ],
    techStack: [
      { text: "Python", color: "bg-blue-800/50 border-blue-400/50" },
      { text: "Playwright", color: "bg-green-800/50 border-green-400/50" },
      { text: "OpenAI", color: "bg-purple-800/50 border-purple-400/50" },
      { text: "ChromaDB", color: "bg-pink-800/50 border-pink-400/50" },
      { text: "FastAPI", color: "bg-teal-800/50 border-teal-400/50" },
      { text: "Slack API", color: "bg-purple-800/50 border-purple-400/50" },
    ],
    links: {
      github: "https://github.com/jeetb89/Promosensei",
      liveDemo: null,
    },
  },
  {
    id: 2,
    title: "Audio Transcription",
    description:
      "Full-stack app for transcribing audio and video with OpenAI Whisper (local inference), plus YouTube audio via yt-dlp, SRT subtitles, batch uploads, and a PostgreSQL-backed job dashboard with live progress (WebSocket, SSE fallback). FastAPI API and React (TypeScript, Vite) frontend; optional AssemblyAI routes in the codebase.",
    icon: "AT",
    iconBg: "bg-gradient-to-br from-cyan-500 to-cyan-700",
    keyAchievements: [
      { text: "Whisper + yt-dlp", color: "bg-cyan-800/50 border-cyan-400/50" },
      { text: "SRT & batch jobs", color: "bg-cyan-800/50 border-cyan-400/50" },
      { text: "Job dashboard", color: "bg-cyan-800/50 border-cyan-400/50" },
      { text: "Live updates (WS/SSE)", color: "bg-cyan-800/50 border-cyan-400/50" },
    ],
    techStack: [
      { text: "FastAPI", color: "bg-teal-800/50 border-teal-400/50" },
      { text: "Whisper / PyTorch", color: "bg-purple-800/50 border-purple-400/50" },
      { text: "React + Vite", color: "bg-blue-800/50 border-blue-400/50" },
      { text: "PostgreSQL", color: "bg-indigo-800/50 border-indigo-400/50" },
      { text: "yt-dlp / FFmpeg", color: "bg-red-800/50 border-red-400/50" },
    ],
    links: {
      github: "https://github.com/jeetb89/Audio-Transcription",
      liveDemo: "https://audio-transcription-omega.vercel.app",
    },
  },
  {
    id: 3,
    title: "Trello Clone",
    description: "A full-featured Trello clone built with React and Vite, featuring drag-and-drop functionality, board management, card creation, and list organization. Deployed on Vercel with a modern, responsive UI that replicates the core Trello experience.",
    icon: "TC",
    iconBg: "bg-gradient-to-br from-blue-500 to-blue-700",
    keyAchievements: [
      { text: "Drag & drop functionality", color: "bg-blue-800/50 border-blue-400/50" },
      { text: "Board management", color: "bg-blue-800/50 border-blue-400/50" },
      { text: "Responsive design", color: "bg-blue-800/50 border-blue-400/50" },
      { text: "Live deployment", color: "bg-blue-800/50 border-blue-400/50" },
    ],
    techStack: [
      { text: "React", color: "bg-blue-800/50 border-blue-400/50" },
      { text: "Vite", color: "bg-purple-800/50 border-purple-400/50" },
      { text: "JavaScript", color: "bg-yellow-800/50 border-yellow-400/50" },
      { text: "Vercel", color: "bg-black/50 border-gray-400/50" },
    ],
    links: {
      github: "https://github.com/jeetb89/Trello_React_Jeet",
      liveDemo: "https://trello-react-jeet.vercel.app",
    },
  },
  {
    id: 4,
    title: "Mindost",
    description: "A full-stack freelance project built with React and TypeScript, featuring real-time voice interactions using VAPI, responsive UI with voice indicators and session controls, and WebSocket integration for seamless real-time communication between frontend and backend.",
    icon: "MD",
    iconBg: "bg-gradient-to-br from-green-500 to-green-700",
    keyAchievements: [
      { text: "Real-time voice interactions", color: "bg-green-800/50 border-green-400/50" },
      { text: "WebSocket integration", color: "bg-green-800/50 border-green-400/50" },
      { text: "Responsive UI design", color: "bg-green-800/50 border-green-400/50" },
      { text: "Full-stack architecture", color: "bg-green-800/50 border-green-400/50" },
    ],
    techStack: [
      { text: "React", color: "bg-blue-800/50 border-blue-400/50" },
      { text: "TypeScript", color: "bg-blue-800/50 border-blue-400/50" },
      { text: "VAPI", color: "bg-purple-800/50 border-purple-400/50" },
      { text: "WebSocket", color: "bg-indigo-800/50 border-indigo-400/50" },
    ],
    links: {
      github: "https://github.com/Aryan9bisht/mindost-frontend",
      liveDemo: null,
      backend: "https://github.com/Aryan9bisht/mindost-backend",
    },
  },
];

export default function FeaturedProjects() {
  return (
    <div className="w-full py-16 px-4 md:px-8 bg-gradient-to-br from-[#0a0a1a] via-[#111122] to-[#1a0a2a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-3">
            Featured Projects
          </h1>
          <p className="text-gray-400 text-base md:text-lg">
            Recent work demonstrating expertise in full-stack development and AI integration
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full min-h-[320px]"
            >
              <Tilt3D
                className="h-full"
                innerClassName="h-full"
                maxTilt={9}
                perspective={1000}
                scale={1.015}
              >
                <div className="bg-[#1f2937] border border-gray-700 rounded-xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.35)] hover:shadow-[0_24px_60px_rgba(168,85,247,0.12)] transition-shadow duration-300 flex flex-col h-full [transform-style:preserve-3d]">
              {/* Project Icon/Visual */}
              <div className="flex justify-center mb-4 [transform:translateZ(20px)]">
                <div className={`w-24 h-24 ${project.iconBg} rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg`}>
                  {project.icon}
                </div>
              </div>

              {/* Project Title */}
              <h3 className="text-xl font-semibold text-white mb-3 text-center">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>

              {/* Key Achievements */}
              <div className="mb-4">
                <p className="text-gray-400 text-xs mb-2 font-medium">Key Achievements:</p>
                <div className="flex flex-wrap gap-2">
                  {project.keyAchievements.map((achievement, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 rounded-lg text-xs text-white border ${achievement.color}`}
                    >
                      {achievement.text}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-4">
                <p className="text-gray-400 text-xs mb-2 font-medium">Tech Stack:</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 rounded-lg text-xs text-white border ${tech.color}`}
                    >
                      {tech.text}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3 mt-auto">
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors border border-gray-600"
                >
                  <Github className="w-4 h-4" />
                  {project.links.backend ? "Frontend" : "GitHub"}
                </a>
                {project.links.backend && (
                  <a
                    href={project.links.backend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors border border-gray-600"
                  >
                    <Github className="w-4 h-4" />
                    Backend
                  </a>
                )}
                {project.links.liveDemo && (
                  <a
                    href={project.links.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>
                </div>
              </Tilt3D>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

