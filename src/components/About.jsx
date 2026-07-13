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
import { Helmet } from "react-helmet-async";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useInView } from "react-intersection-observer";

const ServiceCard = ({ index, title, iconName }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <ParallaxTilt className="xs:w-[250px] w-full">
      <motion.div
        ref={ref}
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
          {inView ? (
            <DotLottieReact
              src={`/assets/animations/${iconName}.lottie`}
              autoplay
              loop
              style={{ height: 150, width: 150 }}
            />
          ) : (
            <div
              style={{ height: 150, width: 150 }}
              className="flex items-center justify-center bg-purple-900/10 rounded-full animate-pulse"
            >
              <span className="text-purple-300 text-xs">Loading...</span>
            </div>
          )}
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
        <title>Daniel Alvarez - Digital Partner & Full Stack Engineer</title>
        <meta
          name="description"
          content="Daniel Alvarez is a Digital Partner & Full Stack Software Engineer helping businesses build & scale digital products. Specialized in Flutter, React Native, Next.js, Node.js, TypeScript, and Firebase."
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
        Most businesses don't need more software — they need the right software.
        That's the perspective I bring as a Digital Partner and a Full Stack
        Software Engineer. I specialize in bridging the gap between technical
        execution and business goals, helping teams design, build, and scale
        products that support real growth.
        <br />
        <br />
        With over five years of professional experience, I collaborate with
        startups and established teams alike. I believe the best conversations
        happen before coding starts — discussing ideas, aligning priorities, and
        making sure we're solving the right problem.
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
