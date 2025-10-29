// <!-- -----------------------------------------------------------------
// @copyright    (C) 2023 SoAS
// @file         Hero.jsx
// @author       Daniel Alvarez <josamogax@gmail.com>
// @brief        Hero section component file.
// @details
// ------------------------------------------------------------------ -->

import { motion } from "framer-motion";
import { styles } from "../style";
import { Helmet } from "react-helmet-async";
import Lottie from "lottie-react";
import { development } from "../assets";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <Helmet>
        <title>Daniel Alvarez - Hero Section</title>
        <meta
          name="description"
          content="I specialize in the design, development and refinement of web and
            mobile software solutions."
        />
      </Helmet>
      {/* Mobile: Avatar on top */}
      <div className="md:hidden absolute top-[80px] w-full flex justify-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="w-[200px] h-[200px] flex items-center justify-center">
            <Lottie
              animationData={development}
              loop={true}
              className="w-full h-full"
            />
          </div>
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-[#915EFF] opacity-20 blur-xl"></div>
        </motion.div>
      </div>

      {/* Content section */}
      <div
        className={`absolute inset-0 top-[300px] md:top-1/2 md:-translate-y-1/2 max-w-7xl mx-auto ${styles.paddingX} flex flex-col md:flex-row items-start md:items-center gap-5`}
      >
        {/* Left side: Purple dot and text */}
        <div className="flex flex-row md:flex-row items-start gap-5 flex-1">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 violet-gradient h-32 sm:h-40" />
          </div>

          <div className="max-w-4xl z-10 relative">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915eff]">Daniel</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I specialize in the design, development and refinement of web and
              mobile software solutions.
            </p>
            <div className="mt-6">
              <h3 className="text-white-100 text-lg sm:text-xl font-light italic leading-relaxed">
                "Crafting solutions that matter — because how you do anything is
                how you do everything."
              </h3>
            </div>
          </div>
        </div>

        {/* Right side: Avatar for tablet and desktop */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:flex justify-center items-center relative"
        >
          <div className="relative">
            {/* Glow effect behind */}
            <div className="absolute inset-0 rounded-full bg-[#915EFF] opacity-20 blur-2xl scale-110"></div>

            {/* Avatar */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] flex items-center justify-center"
            >
              <Lottie
                animationData={development}
                loop={true}
                className="w-full h-full"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* 3D computer commented out for performance optimization */}
      {/* {showCanvas && (
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 pointer-events-none md:bottom-12 lg:bottom-8">
          <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
            <ComputersCanvas />
          </div>
        </div>
      )} */}

      {/* Animated scroll button */}
      {/* <div className="absolute xs:bottom-5 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
