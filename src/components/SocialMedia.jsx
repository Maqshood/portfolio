'use client'
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

import { styles } from "../styles";
import { SectionWrapper } from "./hoc";
import { fadeIn, textVariant } from "../utils/motion";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin className="w-10 h-10" />,
    link: "https://www.linkedin.com/in/sk-maqshood-553482330/",
    color: "hover:text-[#0077b5]",
  },
  {
    name: "GitHub",
    icon: <FaGithub className="w-10 h-10" />,
    link: "https://github.com/Maqshood",
    color: "hover:text-[#ffffff]",
  },
  {
    name: "Gmail",
    icon: <FaEnvelope className="w-10 h-10" />,
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=skmaqshood99@gmail.com",
    color: "hover:text-[#ea4335]",
  },
  {
    name: "WhatsApp",
    icon: <FaWhatsapp className="w-10 h-10" />,
    link: "https://wa.me/919064002301",
    color: "hover:text-[#25D366]",
  },
];

const SocialMedia = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-10">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Connect with me</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Socials.</h2>
      </motion.div>

      <div className="w-full flex justify-center items-center mt-12">
        <div className="flex flex-wrap justify-center gap-10">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              variants={fadeIn("up", "spring", index * 0.2, 0.75)}
              className={`w-20 h-20 rounded-full flex justify-center items-center bg-tertiary shadow-lg shadow-primary border border-secondary/20 hover:border-secondary/50 transition-all duration-300 ${social.color} text-secondary hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(145,94,255,0.5)]`}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(SocialMedia, "socials");
