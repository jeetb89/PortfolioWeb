import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const workExperience = [
  {
    company: "Capillary Technologies",
    role: "Software Developer Engineer - 1",
    duration: "June 2024 - Present",
    months: "1 yr 7 mos",
    location: "Bengaluru, India",
    icon: "C",
    achievements: [
      "Gained hands-on experience with modern technologies including Node.js and React with TypeScript, contributing to full-stack development projects.",
      "Collaborated with senior software engineers to customize the Membercare platform for Optum, one of Capillary's largest clients, ensuring seamless integration and tailored functionality.",
      "Led the development of the frontend for the Valiram B2B microsite, delivering a responsive and user-friendly interface aligned with client requirements.",
    ],
    companyUrl: "https://www.capillarytech.com",
  },
  {
    company: "Freelance Developer",
    role: "Freelance Developer",
    duration: "Feb 2025 - Present",
    months: "Ongoing",
    location: "India",
    icon: "F",
    achievements: [
      "Built the platform using React and TypeScript, enabling smooth, interactive, and scalable user experiences.",
      "Integrated VAPI for real-time voice interactions, enabling a more immersive and natural conversational flow.",
      "Designed a responsive UI with modern design elements, including voice indicators and session controls, optimized for different devices and screen sizes.",
      "Leveraged WebSocket for real-time communication and state management, ensuring smooth and instantaneous data updates between the frontend and backend.",
    ],
    companyUrl: "#",
  },
  {
    company: "Codinix Cloud",
    role: "Software Developer Intern",
    duration: "Feb 2023 - Apr 2023",
    months: "3 months",
    location: "Noida, India",
    icon: "CC",
    achievements: [
      "Developed basic REST APIs using Spring Boot, demonstrating proficiency in Java-based backend development.",
      "Applied Azure and GCP APIs, showcasing adaptability in cloud technology integration and expanding the application's capabilities.",
      "Exercised Postman tool for testing of REST APIs, ensuring reliability and performance.",
      "Leveraged Git for version control, ensuring a collaborative and organized approach to code management.",
    ],
    companyUrl: "#",
  },
];

export default function WorkExperience() {
  return (
    <div className="relative w-full py-16 px-4 md:px-8 bg-gradient-to-br from-[#0a0a1a] via-[#111122] to-[#1a0a2a] overflow-hidden">
      {/* Dot grid */}
      <div className="absolute inset-0 grid-dots opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 heading-3d">
            Work Experience
          </h1>
          <p className="text-gray-400 text-base md:text-lg">
            My professional journey building scalable applications and AI-driven solutions
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical neon line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 transform md:-translate-x-1/2 shadow-[0_0_12px_rgba(168,85,247,0.6)]" />

          <div className="space-y-12">
            {workExperience.map((experience, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  className={`relative flex items-start ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.1 }}
                >
                  {/* Timeline marker with neon pulse */}
                  <div className="absolute left-6 md:left-1/2 z-10 transform -translate-x-1/2 md:-translate-x-1/2">
                    <div className="w-5 h-5 bg-white rounded-full border-2 border-purple-500 neon-border shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
                  </div>

                  {/* Card */}
                  <div
                    className={`w-full md:w-[calc(50%-2rem)] ${
                      isEven
                        ? "ml-16 md:ml-0 md:mr-auto md:pr-8"
                        : "ml-16 md:ml-auto md:pl-8"
                    }`}
                  >
                    <motion.div
                      className="relative bg-gradient-to-br from-[#1f2937] to-[#151f2e] border border-gray-700/60 rounded-xl p-6 shadow-[0_12px_40px_rgba(0,0,0,0.45)] card-3d-hover overflow-hidden"
                      style={{ transformStyle: "preserve-3d" }}
                      whileHover={{ borderColor: "rgba(168,85,247,0.4)" }}
                    >
                      {/* Inner glow edge */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 pointer-events-none" />

                      {/* Company Header */}
                      <div className="flex items-start gap-4 mb-4">
                        <motion.div
                          className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-[0_4px_16px_rgba(168,85,247,0.4)]"
                          style={{ transformStyle: "preserve-3d" }}
                          whileHover={{ rotateY: 20, rotateX: -10, scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {experience.icon}
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-white mb-1">
                            {experience.company}
                          </h3>
                          <p className="text-purple-300 text-sm font-medium mb-2">
                            {experience.role}
                          </p>
                          <p className="text-gray-400 text-sm">
                            {experience.duration} • {experience.months}
                          </p>
                        </div>
                      </div>

                      {/* Achievements */}
                      <ul className="space-y-2 mb-4">
                        {experience.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-gray-300 text-sm leading-relaxed flex items-start gap-2">
                            <span className="text-purple-400 mt-1.5">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Visit Company Link */}
                      <a
                        href={experience.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-purple-400 hover:text-pink-400 text-sm font-medium transition-colors"
                      >
                        Visit Company
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
