import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Hero = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    // Delay slightly to ensure main thread is clear for initial paint
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto overflow-hidden`}>
      <div className="absolute inset-x-0 bottom-0 top-0 bg-hero-pattern bg-cover bg-no-repeat bg-center z-0 hero-background" />

      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-10`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="flex flex-col md:flex-row w-full justify-between items-center gap-10">
          <div className="max-w-xl">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915eff]">Daniel</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I develop high-performance <br className="sm:block hidden" />
              web and mobile applications.
            </p>
            <div className="mt-6">
              <h3 className="text-white-100 text-lg sm:text-xl font-light italic leading-relaxed">
                "Crafting solutions that matter — because how you do anything is
                how you do everything."
              </h3>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center items-center relative w-full h-[300px] md:h-[400px]"
          >
            <div className="absolute inset-0 rounded-full bg-[#915EFF] opacity-10 blur-3xl scale-110"></div>
            {showAnimation ? (
              <DotLottieReact
                src="/assets/animations/development.lottie"
                autoplay
                loop
                style={{ width: "100%", height: "100%", maxWidth: "500px" }}
              />
            ) : (
              <div className="w-[200px] h-[200px] bg-purple-900/10 rounded-full animate-pulse flex items-center justify-center">
                <span className="text-purple-300 text-xs text-center">
                  Loading...
                </span>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-20 px-2 lg:px-0">
        <a href="#about" aria-label="Scroll to about">
          <div className="w-[30px] sm:w-[35px] h-[58px] sm:h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
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
    </section>
  );
};

export default Hero;
