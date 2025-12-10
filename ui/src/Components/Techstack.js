import React from "react";
import { motion } from "framer-motion";
import Tippy from "@tippyjs/react"; // Tooltip library
// import "tippy.js/dist/tippy.css"; 

function IconPack({ src, name, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -8, scale: 1.05 }}
    >
      <Tippy 
        content={<span className="text-sm font-medium">{description || name}</span>} 
        placement="top"
        theme="dark"
      >
        <div className="w-48 h-40 flex flex-col items-center justify-center rounded-xl bg-gradient-to-br from-[#1f2937] to-[#111827] border border-gray-700/50 shadow-lg hover:shadow-purple-500/40 hover:border-purple-500/50 transition-all duration-300 cursor-pointer group">
          <div className="mb-3 p-2 rounded-lg bg-gray-800/50 group-hover:bg-purple-500/20 transition-colors">
            <img 
              alt={name} 
              className="h-10 w-10 transition-transform group-hover:scale-110" 
              src={src}
              loading="lazy"
            />
          </div>
          <span className="text-gray-200 text-sm font-medium group-hover:text-purple-300 transition-colors">{name}</span>
        </div>
      </Tippy>
    </motion.div>
  );
}

function SkillSection({ title, color, icon, children }) {
  return (
    <motion.div 
      className="w-full md:w-4/5 bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-gray-700/50 rounded-2xl p-6 mb-10 shadow-xl hover:shadow-purple-500/10 transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <motion.div
          className="w-12 h-12 flex items-center justify-center rounded-xl text-white text-xl shadow-lg"
          style={{ backgroundColor: color }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {icon}
        </motion.div>
        <h2 className="text-lg md:text-xl font-semibold text-white">{title}</h2>
      </div>
      {/* Skills */}
      <div className="flex flex-wrap gap-6 justify-start">{children}</div>
    </motion.div>
  );
}

export default function Techstack() {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-gray-300 bg-gradient-to-br from-[#0a0a1a] via-[#111122] to-[#1a0a2a]">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-3">
          Technical Skills
        </h1>
        <p className="text-sm md:text-base text-gray-400 text-center max-w-2xl mx-auto">
          A comprehensive toolkit of modern technologies and frameworks I use to
          build scalable, efficient solutions.
        </p>
      </motion.div>

      {/* Languages */}
      <SkillSection title="Languages" color="#3b82f6" icon="💻">
        <IconPack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" name="JavaScript" description="JavaScript programming" index={0} />
        <IconPack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" name="TypeScript" description="TypeScript programming" index={1} />
        <IconPack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" name="Python" description="Python programming" index={2} />
        <IconPack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" name="C++" description="C++ programming" index={3} />
        <IconPack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" name="Java" description="Java programming" index={4} />
      </SkillSection>

      {/* Frontend */}
      <SkillSection title="Frontend" color="#ec4899" icon="🎨">
        <IconPack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" name="React.js" description="React.js framework" index={0} />
        <IconPack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" name="Next.js" description="Next.js framework" index={1} />
        <IconPack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" name="Redux" description="Redux state management" index={2} />
        <IconPack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" name="HTML5" description="HTML5 markup" index={3} />
        <IconPack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" name="CSS3" description="CSS3 styling" index={4} />
        <IconPack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" name="Material UI" description="Material UI components" index={5} />
        <IconPack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" name="Bootstrap" description="Bootstrap framework" index={6} />
      </SkillSection>

      {/* Backend */}
      <SkillSection title="Backend" color="#22c55e" icon="⚙️">
        <IconPack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" name="Node.js" description="Node.js runtime" index={0} />
        <IconPack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" name="Express.js" description="Express.js framework" index={1} />
        <IconPack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" name="Spring Boot" description="Spring Boot framework" index={2} />
      </SkillSection>

      {/* Databases */}
      <SkillSection title="Databases" color="#f59e0b" icon="🗄️">
        <IconPack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" name="MongoDB" description="MongoDB database" index={0} />
        <IconPack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" name="MySQL" description="MySQL database" index={1} />
        <IconPack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" name="PostgreSQL" description="PostgreSQL database" index={2} />
        <IconPack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" name="Redis" description="Redis cache" index={3} />
      </SkillSection>

      {/* DevOps & Cloud */}
      <SkillSection title="DevOps & Cloud" color="#06b6d4" icon="☁️">
        <IconPack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" name="Docker" description="Docker containerization" index={0} />
        <IconPack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" name="Kubernetes" description="Kubernetes orchestration" index={1} />
        <IconPack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" name="AWS" description="Amazon Web Services" index={2} />
        <IconPack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" name="Azure" description="Microsoft Azure" index={3} />
      </SkillSection>

      {/* Tools */}
      <SkillSection title="Tools"  color="#a855f7" icon="🛠️">
        <IconPack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" name="Git" description="Git version control" index={0} />
        <IconPack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" name="GitHub" description="GitHub platform" index={1} />
        <IconPack src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" name="VS Code" description="Visual Studio Code" index={2} />
        <IconPack src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" name="Postman" description="Postman API testing" index={3} />
      </SkillSection>
    </div>
  );
}
