import { motion } from "framer-motion";

const highlights = [
  { value: "2+",   label: "Years Experience",       color: "from-blue-500 to-cyan-400",    glow: "rgba(59,130,246,0.35)"  },
  { value: "3",    label: "Companies",               color: "from-pink-500 to-rose-400",    glow: "rgba(236,72,153,0.35)"  },
  { value: "30%+", label: "Efficiency Improvements", color: "from-purple-500 to-violet-400", glow: "rgba(168,85,247,0.35)"  },
];

export default function ProfessionalHighlights() {
  return (
    <div className="w-full flex justify-center items-center py-16 px-4">
      <motion.div
        className="w-full max-w-4xl rounded-2xl bg-gradient-to-br from-purple-900/40 to-indigo-900/40 border border-purple-500/40 p-8 md:p-12 shadow-[0_20px_60px_rgba(168,85,247,0.15)] neon-border"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center heading-3d">
          Professional Highlights
        </h2>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {highlights.map((h, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center bg-[#0f172a]/70 border border-white/10 rounded-2xl px-10 py-8 card-3d-hover cursor-default overflow-hidden"
              style={{ transformStyle: "preserve-3d", minWidth: "160px" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              {/* Inner glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-20 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at center, ${h.glow} 0%, transparent 70%)` }}
              />
              <div
                className={`text-5xl md:text-6xl font-extrabold mb-2 bg-gradient-to-br ${h.color} bg-clip-text text-transparent heading-3d`}
                style={{ transform: "translateZ(12px)" }}
              >
                {h.value}
              </div>
              <div className="text-gray-300 text-sm md:text-base text-center font-medium">
                {h.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
