// Enhanced Hero component with performance optimizations
import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
import ComputerCSS from "./canvas/ComputerCSS";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";

const HeroOptimized = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [shouldLoad3D, setShouldLoad3D] = useState(false);
  const [userPreference, setUserPreference] = useState(null);
  const [showScrollButton, setShowScrollButton] = useState(true);

  useEffect(() => {
    // Mobile detection
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Performance detection
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const isSlowConnection = connection && (connection.effectiveType === '2g' || connection.effectiveType === 'slow-2g');
    const isLowEndDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
    
    // Check user preference from localStorage
    const savedPreference = localStorage.getItem('hero3DPreference');
    
    if (savedPreference !== null) {
      const preference = JSON.parse(savedPreference);
      setUserPreference(preference);
      setShouldLoad3D(preference);
    } else {
      // Auto-decision based on device capability
      const shouldAutoLoad3D = !isMobile && !isSlowConnection && !isLowEndDevice;
      setShouldLoad3D(shouldAutoLoad3D);
    }

    // Hide scroll button on scroll
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollButton(false);
      } else {
        setShowScrollButton(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile]);

  const toggle3D = (preference) => {
    setShouldLoad3D(preference);
    setUserPreference(preference);
    localStorage.setItem('hero3DPreference', JSON.stringify(preference));
  };

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <Helmet>
        <title>Daniel Alvarez - Hero Section</title>
        <meta
          name="description"
          content="I specialize in the design, development and refinement of web and mobile software solutions."
        />
      </Helmet>

      {/* Performance Toggle - only show if user hasn't made a choice */}
      {userPreference === null && (
        <div className="absolute top-4 right-4 z-50 flex flex-col gap-2">
          <motion.button
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2 }}
            onClick={() => toggle3D(true)}
            className="px-3 py-1 bg-purple-600/80 text-white text-xs rounded-lg backdrop-blur-sm hover:bg-purple-600 transition-colors"
          >
            Enable 3D ✨
          </motion.button>
          <motion.button
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.2 }}
            onClick={() => toggle3D(false)}
            className="px-3 py-1 bg-gray-600/80 text-white text-xs rounded-lg backdrop-blur-sm hover:bg-gray-600 transition-colors"
          >
            Fast Mode ⚡
          </motion.button>
        </div>
      )}

      {/* Reset 3D preference button - only show if user has made a choice */}
      {userPreference !== null && (
        <div className="absolute top-4 right-4 z-50">
          <motion.button
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => {
              setUserPreference(null);
              localStorage.removeItem('hero3DPreference');
            }}
            className="px-2 py-1 bg-gray-800/80 text-white text-xs rounded-lg backdrop-blur-sm hover:bg-gray-700 transition-colors"
            title="Reset 3D preference"
          >
            {shouldLoad3D ? '3D ✨' : 'Fast ⚡'} 🔄
          </motion.button>
        </div>
      )}

      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Daniel</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I specialize in the design, development and refinement of web and
            mobile software solutions.
          </p>
        </div>
      </div>

      {/* Conditional 3D/CSS rendering */}
      {shouldLoad3D ? <ComputersCanvas /> : <ComputerCSS isMobile={isMobile} />}

      {/* Conditional scroll button - hide on mobile or when scrolled */}
      {showScrollButton && !isMobile && (
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ delay: 1.5 }}
          className="absolute xs:bottom-5 bottom-32 w-full flex justify-center items-center"
        >
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
        </motion.div>
      )}

      {/* Mobile scroll indicator - simpler */}
      {isMobile && showScrollButton && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 w-full flex justify-center items-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-white/60 text-sm"
          >
            Scroll down ↓
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default HeroOptimized;