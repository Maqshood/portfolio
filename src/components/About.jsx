'use client'
import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { services } from "../constants/constants"
import { SectionWrapper } from "./hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Image from "next/image";
import color_sharp from "../assets/color_sharp.png";
import astronaut from "../assets/header.svg";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'
    glareEnable={true} glareMaxOpacity={0.8} glareColor="#ffffff" glarePosition="bottom" glareBorderRadius="20px"
    tiltMaxAngleX={30} tiltMaxAngleY={30} tiltEnable={true} perspective={1000}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div

        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <Image
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div className='relative overflow-hidden lg:overflow-visible'>
        <motion.div variants={textVariant()}>
          <p className={'sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'}>Introduction</p>
          <h2 className={'text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'}>Overview.</h2>
        </motion.div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[18px] max-w-3xl leading-[30px] font-semibold'
        >
          I'm a Full-Stack Developer from Kolkata, India, specializing in the
          MERN stack with a strong foundation in JavaScript, MongoDB, and
          modern web development, backed by a diploma in Full-Stack
          Engineering. I recently designed and built Dreamy Story, a cinematic
          wedding photography and videography platform, taking it from a
          static site through to a fully dynamic Next.js application with
          smooth animations, email integrations, and automated image
          management through Cloudinary. I care about writing clean, secure
          code and building websites that feel premium rather than templated,
          and I enjoy taking a project from initial concept all the way
          through to deployment. Whether you need a portfolio site, a business
          website, or a full web application, I bring both technical skill and
          a genuine eye for design to every project I work on.
        </motion.p>
        <Image src={color_sharp} alt="color-sharp" className="absolute z-[-1] h-80 -left-60 w-screen -top-20" />
        <Image src={astronaut} alt="astronaut" className="absolute z-[-1] h-80 -right-20 animation top-28" />
      </div>

      <div className='mt-20 flex-wrap justify-center gap-10 hidden md:flex'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
