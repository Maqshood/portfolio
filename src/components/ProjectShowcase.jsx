"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiExternalLink, FiOrbit, FiSparkles } from "react-icons/fi";
import { SectionWrapper } from "./hoc";
import { textVariant, fadeIn } from "../utils/motion";

const projects = [
  {
    title: "Dreamy Story",
    description:
      "An imaginative storytelling platform designed to bring creative ideas and stories to life.",
    url: "https://dreamystory.in/",
    preview: "https://image.thum.io/get/width/1200/crop/700/noanimate/https://dreamystory.in/",
    kind: "dreamy",
    eyebrow: "IMAGINATION ENGINE",
  },
  {
    title: "Live Crypto Tracker",
    description:
      "Explore cryptocurrency market information and monitor digital asset prices in a focused market dashboard.",
    url: "https://live-cryptoo-tracker.netlify.app/",
    preview: "https://image.thum.io/get/width/1200/crop/700/noanimate/https://live-cryptoo-tracker.netlify.app/",
    kind: "crypto",
    eyebrow: "MARKET INTELLIGENCE",
  },
  {
    title: "Weather Wise",
    description:
      "Explore weather conditions and forecasts through a clear, interactive weather experience.",
    url: "https://weather-wise-wine.vercel.app/",
    preview: "https://image.thum.io/get/width/1200/crop/700/noanimate/https://weather-wise-wine.vercel.app/",
    kind: "weather",
    eyebrow: "ATMOSPHERIC SYSTEMS",
  },
  {
    title: "Task App",
    description:
      "A productivity tool designed to organize tasks, manage priorities, and help you stay on track.",
    url: "https://taskappitzmaq.netlify.app/",
    preview: "https://image.thum.io/get/width/1200/crop/700/noanimate/https://taskappitzmaq.netlify.app/",
    kind: "tasks",
    eyebrow: "MISSION CONTROL",
  },
];

function PreviewFallback({ kind, title }) {
  return (
    <div className={`project-preview-fallback project-preview-fallback--${kind}`} aria-label={`${title} visual preview`}>
      <div className="project-fallback-orbit project-fallback-orbit--one" />
      <div className="project-fallback-orbit project-fallback-orbit--two" />
      <div className="project-fallback-window">
        <div className="project-fallback-toolbar">
          <span /><span /><span />
          <i />
        </div>
        {kind === "crypto" ? (
          <div className="project-fallback-market">
            <div><small>MARKET OVERVIEW</small><b>$68,429.12</b><em>+4.82% today</em></div>
            <svg viewBox="0 0 320 90" role="img" aria-label="Decorative rising market chart">
              <defs><linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#42d9ff" stopOpacity=".35"/><stop offset="100%" stopColor="#42d9ff" stopOpacity="0"/></linearGradient></defs>
              <path d="M0 72 L28 60 L52 66 L78 42 L105 52 L130 30 L157 45 L184 21 L209 33 L238 13 L264 27 L290 8 L320 14 L320 90 L0 90 Z" fill="url(#chartFill)"/>
              <polyline points="0,72 28,60 52,66 78,42 105,52 130,30 157,45 184,21 209,33 238,13 264,27 290,8 320,14" fill="none" stroke="#42d9ff" strokeWidth="2.5"/>
            </svg>
          </div>
        ) : kind === "weather" ? (
          <div className="project-fallback-weather"><span>☁</span><div><small>LOCAL FORECAST</small><b>24°</b><em>Partly cloudy</em></div><div className="project-weather-bars"><i/><i/><i/><i/><i/><i/></div></div>
        ) : kind === "tasks" ? (
          <div className="project-fallback-tasks"><small>TODAY'S MISSIONS</small><div> <i/> Design system <b>✓</b></div><div><i/> Ship new feature <b>✓</b></div><div><i/> Review roadmap <b>·</b></div></div>
        ) : (
          <div className="project-fallback-dreamy"><FiSparkles /><small>A LITTLE MAGIC, A LOT OF STORY</small><b>Dream beyond<br/>the ordinary.</b><span>✦　✧　✦</span></div>
        )}
      </div>
      <span className="project-fallback-planet" />
    </div>
  );
}

function ProjectCard({ project, index }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <motion.article
      variants={fadeIn(index % 2 === 0 ? "right" : "left", "spring", index * 0.12, 0.65)}
      whileHover={{ y: -7 }}
      className="project-card group"
    >
      <a
        href={project.url}
        target="_blank"
        rel="noreferrer noopener"
        className="project-card-preview"
        aria-label={`Open ${project.title} live website in a new tab`}
      >
        {!imageFailed ? (
          <img
            src={project.preview}
            alt={`Screenshot preview of ${project.title}`}
            loading="lazy"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <PreviewFallback kind={project.kind} title={project.title} />
        )}
        <div className="project-preview-shade" />
        <span className="project-preview-label"><FiOrbit aria-hidden="true" /> {project.eyebrow}</span>
        <span className="project-preview-open" aria-hidden="true"><FiArrowUpRight /></span>
      </a>

      <div className="project-card-content">
        <div className="project-card-title-row">
          <h3>{project.title}</h3>
          <FiExternalLink className="project-title-icon" aria-hidden="true" />
        </div>
        <p>{project.description}</p>
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer noopener"
          className="project-explore-link"
        >
          Explore Project <FiArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </motion.article>
  );
}

function ProjectShowcase() {
  return (
    <section className="project-showcase">
      <div className="project-showcase-glow project-showcase-glow--left" aria-hidden="true" />
      <div className="project-showcase-glow project-showcase-glow--right" aria-hidden="true" />
      <motion.div variants={textVariant()} className="project-showcase-heading">
        <p className="project-section-eyebrow">SELECTED TRANSMISSIONS</p>
        <h2>My <span>Projects</span></h2>
        <p className="project-section-subtitle">Building ideas into digital experiences.</p>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.14 } },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
        className="project-grid"
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </motion.div>
    </section>
  );
}

export default SectionWrapper(ProjectShowcase, "projects");
