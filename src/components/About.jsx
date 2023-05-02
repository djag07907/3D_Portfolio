// <!-- -----------------------------------------------------------------
// @copyright    (C) 2023 SoAS
// @file         About.jsx
// @author       Daniel Alvarez <josamogax@gmail.com>
// @brief        About section component file.
// @details
// ------------------------------------------------------------------ -->

import React from "react";
import ParallaxTilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import DownloadCVButton from "./CV";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <ParallaxTilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </ParallaxTilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About me</h2>
      </motion.div>
      <motion.p
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        variants={fadeIn("", "", 0.1, 1)}
      >
        As a skilled IT Engineer and versatile Software Developer, I bring over
        3 years of expertise in Software Development to the table, with
        proficiency in Web & Mobile Development Tech Stacks. Throughout my
        career, I've worked with transnational companies on various projects
        spanning verticals such as Business Solutions, e-Commerce,
        Telecommunications, SEO content, and Data Warehousing, which has allowed
        me to develop a diverse skill set and gain valuable experience. <br />
        <br /> My goal is to create solutions that provide exceptional customer
        experience through client-oriented interfaces. I seek new challenges and
        opportunities that allow me to apply my knowledge, add professional
        value, and achieve constant professional growth. Whether you're looking
        to revamp your web presence, solve a tech issue, or develop a new mobile
        app, I'm ready to tackle any project with enthusiasm and expertise,
        ensuring that it exceeds your expectations.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 content-center">
        <DownloadCVButton />
      </div>
      <div className="mt-20 flex flex-wrap gap-10 content-center justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};
// Section in which the wrapper is placed and navigates to the idName accordingly
export default SectionWrapper(About, "about");
