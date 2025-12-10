import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const name = "Jeet Raj";
  const title = "Software Engineer";
  const email = "bishtjeet89@gmail.com";

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/jeetb89",
      icon: Github,
      color: "hover:text-gray-300 hover:bg-gray-800",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jeetraj-bisht-9aa969211/",
      icon: Linkedin,
      color: "hover:text-blue-400 hover:bg-blue-500/20",
    },
    {
      name: "Email",
      url: `mailto:${email}`,
      icon: Mail,
      color: "hover:text-pink-400 hover:bg-pink-500/20",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <footer className="w-full bg-gradient-to-br from-[#0a0a1a] via-[#111122] to-[#1a0a2a] mt-auto relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-500/10 blur-3xl rounded-full"></div>
      </div>

      {/* Separator Line with Gradient */}
      <div className="relative">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-purple-400 to-pink-500"></div>
      </div>

      {/* Footer Content */}
      <div className="relative w-full py-16 px-4 md:px-8">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="text-center space-y-8">
            {/* Name and Title */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-3">
                {name}
              </h2>
              <p className="text-gray-300 text-lg md:text-xl font-medium">
                {title}
              </p>
              <p className="text-gray-400 text-sm md:text-base mt-2">
                Building innovative solutions with passion and precision
              </p>
            </motion.div>

            {/* Social Media Links */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center items-center gap-4"
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target={social.name !== "Email" ? "_blank" : undefined}
                    rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
                    className={`group relative w-14 h-14 rounded-xl bg-gray-800/50 border border-gray-700/50 flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color} backdrop-blur-sm`}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {social.name}
                    </span>
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Divider */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center gap-4 py-4"
            >
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-gray-700"></div>
              <div className="w-2 h-2 rounded-full bg-purple-500/50"></div>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-gray-700"></div>
            </motion.div>

            {/* Copyright and Made with Love */}
            <motion.div variants={itemVariants} className="space-y-2">
              <p className="text-gray-400 text-sm md:text-base flex items-center justify-center gap-2">
                © {currentYear} {name}. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs md:text-sm flex items-center justify-center gap-1">
                Made with <Heart className="w-4 h-4 text-pink-500 fill-pink-500 animate-pulse" /> by {name}
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center items-center gap-6 pt-4 text-sm"
            >
              <a
                href="#home"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                Home
              </a>
              <span className="text-gray-600">•</span>
              <a
                href="#skills"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                Skills
              </a>
              <span className="text-gray-600">•</span>
              <a
                href="#experience"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                Experience
              </a>
              <span className="text-gray-600">•</span>
              <a
                href="#projects"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                Projects
              </a>
              <span className="text-gray-600">•</span>
              <a
                href="#contact"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                Contact
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
