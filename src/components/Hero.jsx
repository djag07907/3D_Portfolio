// <!-- -----------------------------------------------------------------
// @copyright    (C) 2023 SoAS
// @file         Hero.jsx
// @author       Daniel Alvarez <josamogax@gmail.com>
// @brief        Hero section component file.
// @details
// ------------------------------------------------------------------ -->

import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";

const Hero = () => {
  const [showCanvas, setShowCanvas] = useState(false);

  useEffect(() => {
    // Show 3D canvas from tablet and above
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    setShowCanvas(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setShowCanvas(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

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
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div
            className={`w-1 violet-gradient ${
              showCanvas ? "sm:h-80 h-40" : "h-32 sm:h-40"
            }`}
          />
        </div>

        <div
          className={`${showCanvas ? "max-w-2xl" : "max-w-4xl"} z-10 relative`}
        >
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Daniel</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I specialize in the design, development and refinement of web and
            mobile software solutions.
          </p>
          <div className={`${showCanvas ? "mt-4" : "mt-6"}`}>
            <h3 className="text-white-100 text-lg sm:text-xl font-light italic leading-relaxed">
              "Crafting solutions that matter — because how you do anything is
              how you do everything."
            </h3>
          </div>
        </div>
      </div>

      {/* Show 3D computer from tablet and above (768px+) centered with better positioning */}
      {showCanvas && (
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 pointer-events-none md:bottom-12 lg:bottom-8">
          <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
            <ComputersCanvas />
          </div>
        </div>
      )}

      {/* Animated scroll button - only show when no 3D canvas */}
      {!showCanvas && (
        <div className="absolute xs:bottom-5 bottom-32 w-full flex justify-center items-center">
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
        </div>
      )}
    </section>
  );
};

export default Hero;
