import React from "react";
import { motion } from "framer-motion";

function IconPack({ src, name, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="flip-card w-36 h-36"
    >
      <div className="flip-card-inner">
        {/* Front */}
        <div className="flip-card-front bg-gradient-to-br from-[#1f2937] to-[#111827] border border-gray-700/50 shadow-[0_8px_24px_rgba(0,0,0,0.4)] cursor-pointer p-3">
          <div className="mb-3 p-2 rounded-lg bg-gray-800/60">
            <img alt={name} className="h-9 w-9" src={src} loading="lazy" />
          </div>
          <span className="text-gray-200 text-xs font-semibold text-center">{name}</span>
        </div>
        {/* Back */}
        <div className="flip-card-back bg-gradient-to-br from-purple-900/80 to-pink-900/60 border border-purple-500/50 shadow-[0_8px_32px_rgba(168,85,247,0.3)] cursor-pointer p-3 gap-2">
          <img alt={name} className="h-8 w-8" src={src} loading="lazy" />
          <span className="text-white text-xs font-bold">{name}</span>
          <span className="text-purple-200 text-[10px] text-center leading-tight">{description}</span>
        </div>
      </div>
    </motion.div>
  );
}

function SkillSection({ title, color, icon, children }) {
  return (
    <motion.div
      className="w-full md:w-4/5 bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-gray-700/50 rounded-2xl p-6 mb-10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] hover:shadow-[0_24px_72px_rgba(168,85,247,0.12)] card-3d-hover"
      style={{ transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <motion.div
          className="w-12 h-12 flex items-center justify-center rounded-xl text-white text-xl shadow-lg"
          style={{ backgroundColor: color, transformStyle: "preserve-3d" }}
          whileHover={{ scale: 1.15, rotateY: 15, rotateX: -8 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {icon}
        </motion.div>
        <h2 className="text-lg md:text-xl font-semibold text-white">{title}</h2>
      </div>
      {/* Skills */}
      <div className="flex flex-wrap gap-5 justify-start">{children}</div>
    </motion.div>
  );
}

export default function Techstack() {
  return (
    <div className="relative flex flex-col items-center justify-center py-16 px-4 text-gray-300 bg-gradient-to-br from-[#0a0a1a] via-[#111122] to-[#1a0a2a] overflow-hidden">

      {/* Subtle dot grid */}
      <div className="absolute inset-0 grid-dots opacity-25 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 relative z-10"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-3 heading-3d">
          Technical Skills
        </h1>
        <p className="text-sm md:text-base text-gray-400 text-center max-w-2xl mx-auto">
          Hover each card to flip it — a comprehensive toolkit of modern technologies
          I use to build scalable, efficient solutions.
        </p>
      </motion.div>

      {/* Languages */}
      <SkillSection title="Languages" color="#3b82f6" icon="💻">
        <IconPack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" name="JavaScript" description="Dynamic scripting & ES2024+" index={0} />
        <IconPack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" name="TypeScript" description="Strongly typed JS superset" index={1} />
        <IconPack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" name="Python" description="AI/ML & backend scripting" index={2} />
        <IconPack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" name="C++" description="Systems & performance code" index={3} />
        <IconPack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" name="Java" description="Enterprise & Spring Boot" index={4} />
      </SkillSection>

      {/* Frontend */}
      <SkillSection title="Frontend" color="#ec4899" icon="🎨">
        <IconPack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" name="React.js" description="Component-driven UI" index={0} />
        <IconPack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" name="Next.js" description="SSR & full-stack React" index={1} />
        <IconPack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" name="Redux" description="Predictable state management" index={2} />
        <IconPack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" name="HTML5" description="Semantic markup" index={3} />
        <IconPack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" name="CSS3" description="Animations & responsive layout" index={4} />
        <IconPack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" name="Material UI" description="Google design components" index={5} />
        <IconPack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" name="Bootstrap" description="Rapid responsive UI" index={6} />
      </SkillSection>

      {/* Backend */}
      <SkillSection title="Backend" color="#22c55e" icon="⚙️">
        <IconPack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" name="Node.js" description="Async server-side JS" index={0} />
        <IconPack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" name="Express.js" description="Minimal Node.js framework" index={1} />
        <IconPack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" name="Spring Boot" description="Java enterprise backend" index={2} />
      </SkillSection>

      {/* Databases */}
      <SkillSection title="Databases" color="#f59e0b" icon="🗄️">
        <IconPack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" name="MongoDB" description="Document NoSQL database" index={0} />
        <IconPack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" name="MySQL" description="Relational SQL database" index={1} />
        <IconPack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" name="PostgreSQL" description="Advanced open-source SQL" index={2} />
        <IconPack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" name="Redis" description="In-memory key-value cache" index={3} />
      </SkillSection>

      {/* DevOps & Cloud */}
      <SkillSection title="DevOps & Cloud" color="#06b6d4" icon="☁️">
        <IconPack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" name="Docker" description="Container packaging" index={0} />
        <IconPack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" name="Kubernetes" description="Container orchestration" index={1} />
        <IconPack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" name="AWS" description="Cloud compute & storage" index={2} />
        <IconPack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" name="Azure" description="Microsoft cloud platform" index={3} />
      </SkillSection>

      {/* Tools */}
      <SkillSection title="Tools" color="#a855f7" icon="🛠️">
        <IconPack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" name="Git" description="Distributed version control" index={0} />
        <IconPack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" name="GitHub" description="Code hosting & CI" index={1} />
        <IconPack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" name="VS Code" description="Code editor & debugger" index={2} />
        <IconPack src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" name="Postman" description="API testing & docs" index={3} />
      </SkillSection>
    </div>
  );
}
