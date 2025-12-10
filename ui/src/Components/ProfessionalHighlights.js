import React from "react";

export default function ProfessionalHighlights() {
  const highlights = [
    {
      value: "2+",
      label: "Years Experience",
      color: "text-blue-400",
    },
    {
      value: "3",
      label: "Companies",
      color: "text-pink-400",
    },
    {
      value: "30%+",
      label: "Efficiency Improvements",
      color: "text-white",
    },
  ];

  return (
    <div className="w-full flex justify-center items-center py-16 px-4">
      <div className="w-full max-w-4xl rounded-2xl bg-gradient-to-br from-purple-900/40 to-indigo-900/40 border border-purple-500/50 p-8 md:p-12 shadow-xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
          Professional Highlights
        </h2>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {highlights.map((highlight, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className={`text-5xl md:text-6xl font-bold ${highlight.color} mb-2`}>
                {highlight.value}
              </div>
              <div className="text-white text-sm md:text-base text-center">
                {highlight.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

