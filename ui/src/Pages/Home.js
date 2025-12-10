// import React from 'react';
// import { portfolioData } from '../data/data';
// import Contact from '../Components/Contact';
// import Type from '../Components/Typewriter';
// import Techstack from '../Components/Techstack';
// import Projects from '../Components/Projects';
// import GitCalender from '../Components/GitCalender';
// //logo
// import logo from "../Media/developer.svg";
// import profile from "../Media/profile.svg";
// import cloud from "../Media/sun.svg"

// export default function Home() {
//   const { personal, contact } = portfolioData;
  
//   return (
// 		<div className="flex flex-wrap w-full space-y-3 md:px-20">
// 			{/* main */}

// 			<div className="pt-10 w-1/2 text-blue-800 relative text-xl md:text-4xl space-y-2 md:space-y-5 justify-center flex flex-col ">
// 				<h1>Hi!</h1>
// 				<h1>
// 					I'M <strong> {personal.name}</strong>
// 				</h1>
// 				<div className="h-20 md:h-40">
// 					<Type />
// 				</div>
// 			</div>
// 			<div className="relative w-1/2 ">
// 				<img src={logo} alt="Img" className="mt-10  " />
// 				<img
// 					src={cloud}
// 					alt="Img"
// 					className="absolute w-1/2 md:w-1/3  -right-4 md:-right-20 top-6 horizontal-rotate"
// 				/>
// 			</div>

// 			{/* Intro */}
// 			<section id="about" className="w-full flex flex-wrap text-sm md:text-lg md:pt-10">
// 				<h1 className="text-2xl md:text-4xl w-full text-blue-800 font-semibold pb-2 text-center ">Introduction</h1>

// 				<div className="w-full text-blue-950">
// 					<p className="">
// 						{personal.introduction.main}
// 					</p>
// 					{personal.introduction.highlights.map((highlight, index) => (
// 						<div key={index}>
// 							<h3 className="font-mono text-blue-700 font-semibold">{highlight.title}:</h3>
// 							<p>{highlight.description}</p>
// 						</div>
// 					))}
// 				</div>
// 			</section>








			// {/* Skills */}
			// <div className="w-full items-center flex flex-col pt-4 md:pt-10">
			// 	<h1 className="w-full text-2xl md:text-4xl  text-blue-800 font-semibold pb-2 text-center ">
			// 		Technology Learnt
			// 	</h1>
			// 	<div className="w-5/6">
			// 		<Techstack />
			// 	</div>
			// </div>
// 			{/* Projects */}
// 			<section id="projects" className=" w-full items-center flex flex-col pt-4 md:pt-10 ">
// 				<h1 className="w-full text-2xl md:text-4xl text-blue-800 font-semibold pb-2 text-center">My Projects</h1>
// 				<Projects />
// 			</section>
// 			{/* github */}
// 			<section className="w-full  flex flex-col pt-4 md:pt-10 relative">
// 				<h1 className="w-full text-2xl md:text-4xl text-blue-800 font-semibold pb-2 text-center">Days I <strong>Code</strong></h1>
// 				<GitCalender />
// 			</section>

// 			{/* Contacts */}
// 			<section id="contact" className="w-full justify-center text-center pt-10 ">
// 				<div className="flex justify-center">
// 					<img src={profile} alt="IMG" className="h-72" />
// 				</div>
// 				<p className="mt-2 text-2xl md:text-3xl font-semibold  text-blue-800">Find me on</p>
// 				<div className="w-full justify-center flex">
// 					<Contact h={"h-12"} />
// 				</div>
// 			</section>
// 		</div>
//   );
// }
import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Mail, Linkedin } from "lucide-react";
import devAnimator from "../Media/DevAnimation.png"; 
import Techstack from "../Components/Techstack";
import WorkExperience from "../Components/WorkExperience";
import ProfessionalHighlights from "../Components/ProfessionalHighlights";
import FeaturedProjects from "../Components/FeaturedProjects";
import MoreProjects from "../Components/MoreProjects";
import GetInTouch from "../Components/GetInTouch";

// Animation variants for scroll-triggered animations
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
	<>
	
	<section className="relative w-[100%] flex justify-evenly flex flex-col bg-gradient-to-br from-[#0a0a1a] via-[#111122] to-[#1a0a2a] text-white overflow-hidden">
    <section id="home" className="relative w-[100%] flex justify-evenly flex flex-col md:flex-row items-center justify-between   min-h-screen bg-gradient-to-br from-[#0a0a1a] via-[#111122] to-[#1a0a2a] text-white overflow-hidden">
      
      {/* Left Content */}
      <div className="max-w-xl space-y-6 z-10">
        <p className="text-pink-400 font-medium">Hello, I'm</p>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Jeet Raj
          </span>
        </h1>

        {/* Typing Animation */}
        <h2 className="text-2xl md:text-3xl font-semibold">
          <TypeAnimation
            sequence={[
              "AI/ML Engineer", 2000,
              "Full Stack Developer", 2000,
              "Problem Solver", 2000,
            ]}
            speed={50}
            repeat={Infinity}
            cursor={true}
          />
        </h2>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed">
          Solutions-oriented Full Stack Developer with 2+ years of experience designing and implementing 
          scalable applications using JavaScript, Python, and React.js. Specialized in AI integration, workflow automation, 
          and cloud optimization, delivering 30%+ efficiency improvements across multiple projects.
        </p>

        {/* Buttons */}
        <div className="flex space-x-4">
          <a
            href="mailto:bishtjeet89@gmail.com"
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium shadow-lg hover:scale-105 hover:shadow-pink-500/40 transition"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </a>
          <a
            href="https://www.linkedin.com/in/jeetraj-bisht-9aa969211/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-full border border-purple-400 text-purple-300 font-medium hover:bg-purple-400/10 hover:scale-105 transition"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </div>

        {/* Footer Info */}
        <div className="flex items-center gap-6 text-sm text-gray-400 pt-4">
          <span>📍 Bangalore, India</span>
          <span className="flex items-center gap-1">
            <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
            Available for opportunities
          </span>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="relative mt-12 md:mt-0 z-10">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative group"
        >
          {/* Avatar with glow */}
          <img
            src={devAnimator}
            alt="Jeet Raj - Full Stack Developer"
            loading="eager"
            className="w-72 md:w-96 rounded-full border border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.4)] group-hover:scale-105 transition"
          />

          {/* Floating Badges */}
          <motion.span
            initial={{ y: -10 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute -top-4 right-0 px-3 py-1 text-sm bg-gradient-to-r from-purple-400 to-pink-500 rounded-full shadow-lg"
          >
            AI Engineer
          </motion.span>
          <motion.span
            initial={{ y: 10 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute bottom-8 -left-6 px-3 py-1 text-sm bg-purple-500/60 rounded-full shadow-md"
          >
            2+ Years Experience
          </motion.span>
          <motion.span
            initial={{ y: -8 }}
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="absolute -bottom-6 right-6 px-3 py-1 text-sm bg-purple-700/70 rounded-full shadow-md"
          >
            Full Stack Developer
          </motion.span>
        </motion.div>
      </div>

      {/* Background Glow Effect */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-500/20 blur-2xl rounded-full"></div>

	
    </section>
	
	<div id="skills">
		<Techstack/>
	</div>

    {/* Always Learning & Growing Section */}
    <motion.section 
      className="w-full flex justify-center items-center py-16 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <div className="w-full max-w-4xl rounded-2xl bg-gradient-to-br from-purple-900/40 to-purple-800/30 border border-purple-500/50 p-8 md:p-12 shadow-xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
          Always Learning & Growing
        </h2>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 text-center max-w-3xl mx-auto">
          Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, tools, and methodologies to stay at the forefront of software development and deliver cutting-edge solutions.
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-4">
          <div className="px-6 py-3 rounded-xl bg-purple-800/50 border border-purple-400/50 text-white font-medium text-sm md:text-base">
            36+ Technologies
          </div>
          <div className="px-6 py-3 rounded-xl bg-red-900/50 border border-red-400/50 text-white font-medium text-sm md:text-base">
            2+ Years Experience
          </div>
          <div className="px-6 py-3 rounded-xl bg-purple-800/50 border border-purple-400/50 text-white font-medium text-sm md:text-base">
            Full Stack Development
          </div>
        </div>
      </div>
    </motion.section>

    {/* Work Experience Section */}
    <motion.div 
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <WorkExperience />
    </motion.div>

    {/* Professional Highlights Section */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <ProfessionalHighlights />
    </motion.div>

    {/* Featured Projects Section */}
    <motion.div 
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <FeaturedProjects />
    </motion.div>

    {/* More Projects Coming Soon Section */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <MoreProjects />
    </motion.div>

    {/* Get In Touch Section */}
    <motion.div 
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <GetInTouch />
    </motion.div>

	</section >

	</>
  );
}
