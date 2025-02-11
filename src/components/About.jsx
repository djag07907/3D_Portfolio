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
import { Helmet } from "react-helmet";
import Lottie from "react-lottie";

const ServiceCard = ({ index, title, icon }) => {
  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: icon,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

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
          {/* <img src={icon} alt={title} className="w-16 h-16 object-contain" /> */}
          <Lottie options={animationOptions} height={150} width={150} />
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
      <Helmet>
        <title>Daniel Alvarez - About me</title>
        <meta
          name="description"
          content="Skilled and versatile Software Engineer specialized
            in Web and Mobile Software Development as well as UX/UI and software
            life-cycle."
        />
      </Helmet>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About me</h2>
      </motion.div>
      <motion.p
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        variants={fadeIn("", "", 0.1, 1)}
      >
        As a versatile Software Engineer with over four years of experience, I
        specialize in crafting innovative cutting-edge web and mobile solutions.
        I've collaborated with international companies on projects spanning
        verticals such as Business Solutions, e-Commerce, Telecommunications,
        and SEO content, which has allowed me to develop a diverse skill set and
        gain valuable experience. <br />
        <br />
        Whether you need to enhance your web presence, resolve tech issues, or
        develop a mobile app, I'm ready to tackle any project with enthusiasm
        and expertise, ensuring that it exceeds your expectations.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 content-center">
        <DownloadCVButton />
      </div>
      <div className="mt-10 flex flex-wrap gap-10 content-center justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
