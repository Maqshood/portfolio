"use client";
import React from "react";
import { SectionWrapper } from "./hoc";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";
import Image from "next/image";
import color_sharp from "../assets/color_sharp.png";

// Import existing icons from assets
import {
  reactjs,
  nextjs,
  html,
  css,
  tailwind,
  nodejs,
  express,
  mongodb,
  git,
  github,
} from "../assets";

import { SiVercel, SiPostman } from "react-icons/si";
import { FaMobileAlt, FaSearch, FaServer, FaBolt, FaShieldAlt, FaMagic } from "react-icons/fa";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: reactjs },
      { name: "Next JS", icon: nextjs },
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
      { name: "Tailwind", icon: tailwind },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: nodejs },
      { name: "Express", icon: express },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: mongodb },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: git },
      { name: "GitHub", icon: github },
      { name: "Vercel", icon: <SiVercel className="text-white w-full h-full" /> },
      { name: "Postman", icon: <SiPostman className="text-[#FF6C37] w-full h-full" /> },
    ],
  },
  {
    title: "Specializations",
    skills: [
      { name: "Responsive Design", icon: <FaMobileAlt className="text-[#915eff] w-full h-full p-[2px]" /> },
      { name: "SEO", icon: <FaSearch className="text-[#915eff] w-full h-full p-[2px]" /> },
      { name: "REST APIs", icon: <FaServer className="text-[#915eff] w-full h-full p-[2px]" /> },
      { name: "Performance Optimization", icon: <FaBolt className="text-[#915eff] w-full h-full p-[2px]" /> },
      { name: "Authentication", icon: <FaShieldAlt className="text-[#915eff] w-full h-full p-[2px]" /> },
      { name: "Modern UI", icon: <FaMagic className="text-[#915eff] w-full h-full p-[2px]" /> },
    ],
  },
];

const SkillCategoryRow = ({ index, title, skills }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.15, 0.75)}
    className="w-full flex flex-col md:flex-row items-center md:items-start md:justify-between py-8 border-b border-white/5 last:border-0"
  >
    <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center md:justify-start items-center mt-2">
      <h3 className="text-[24px] md:text-[28px] font-black text-white tracking-widest uppercase opacity-90">
        {title}
      </h3>
    </div>
    
    <div className="md:w-3/4 flex flex-wrap justify-center md:justify-start gap-4">
      {skills.map((skill) => (
        <motion.div
          key={skill.name}
          whileHover={{ y: -5, scale: 1.05 }}
          className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_20px_rgba(145,94,255,0.2)] transition-all duration-300 cursor-default"
        >
          <div className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center">
            {typeof skill.icon === "string" || skill.icon?.src ? (
              <Image
                src={skill.icon}
                alt={skill.name}
                width={32}
                height={32}
                className="object-contain w-full h-full drop-shadow-md"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white drop-shadow-md">
                {skill.icon}
              </div>
            )}
          </div>
          <span className="text-white-100 text-[16px] md:text-[18px] font-semibold tracking-wide">
            {skill.name}
          </span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const Tech = () => {
  return (
    <>
      <div className="relative">
        <motion.div variants={textVariant()}>
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
            Tech Stack
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Skills.
          </h2>
        </motion.div>
        <Image
          src={color_sharp}
          alt="color-sharp"
          className="absolute z-[-1] h-80 -left-60 w-screen -top-20"
        />
      </div>

      <div className="flex relative z-10 flex-col mt-16 w-full max-w-6xl mx-auto">
        {skillCategories.map((category, index) => (
          <SkillCategoryRow
            key={category.title}
            index={index}
            title={category.title}
            skills={category.skills}
          />
        ))}
      </div>

      <div className="w-full h-full absolute top-10 flex flex-col items-center justify-center pointer-events-none">
        <div className="w-[1000px] 1000:w-full h-full z-[-10] opacity-[0.3] absolute flex flex-col bg-cover items-center justify-center">
          <video
            className="w-full h-auto"
            preload="none"
            playsInline
            loop
            muted
            autoPlay
            loading="lazy"
            src="/cards-video.webm"
          ></video>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
