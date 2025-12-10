import React from "react";
import { Github } from "lucide-react";

export default function MoreProjects() {
  return (
    <div className="w-full flex justify-center items-center py-16 px-4">
      <div className="w-full max-w-4xl rounded-2xl bg-gradient-to-br from-purple-900/40 to-purple-800/30 border border-purple-500/50 p-8 md:p-12 shadow-xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
          More Projects Coming Soon
        </h2>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 text-center max-w-3xl mx-auto">
          I'm constantly working on new projects and exploring cutting-edge technologies. Check out my GitHub for the latest updates and contributions to open-source projects.
        </p>
        
        <div className="flex justify-center">
          <a
            href="https://github.com/jeetb89"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-lg shadow-lg hover:shadow-pink-500/40 transition-all duration-300 hover:scale-105"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

