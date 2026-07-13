// <!-- -----------------------------------------------------------------
// @copyright    (C) 2023 SoAS
// @file         App.jsx
// @author       Daniel Alvarez <josamogax@gmail.com>
// @brief        Portfolio main app file.
// @details
// ------------------------------------------------------------------ -->

import { BrowserRouter } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { Navbar, Hero, JSONLD } from "./components";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./performance-monitor.js";

// Lazy load heavy components
const About = lazy(() => import("./components/About.jsx"));
const Experience = lazy(() => import("./components/Experience.jsx"));
const Tech = lazy(() => import("./components/Tech.jsx"));
const TechCard = lazy(() => import("./components/TechCard.jsx"));
const Works = lazy(() => import("./components/Works.jsx"));
const Contact = lazy(() => import("./components/Contact.jsx"));
const StarsCanvas = lazy(() => import("./components/canvas/Stars.jsx"));

// Loading fallback component
const LoadingFallback = () => (
  <div
    style={{
      minHeight: "200px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
    }}
  >
    <div className="animate-pulse">Loading...</div>
  </div>
);

const App = () => {
  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    const gaId = import.meta.env.VITE_GA_ID;
    if (gaId) {
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      window.gtag = gtag;
      gtag("js", new Date());
      gtag("config", gaId);
    }
  }, []);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <JSONLD />
          <Helmet>
            <title>Daniel Alvarez - Digital Partner & Full Stack Software Engineer</title>
            <meta
              name="description"
              content="Daniel Alvarez is a Digital Partner & Full Stack Software Engineer helping businesses build & scale digital products. Specialized in Flutter, React Native, Next.js, Angular, Node.js, and Firebase."
            />
          </Helmet>
          <div className="bg-hero-pattern-mobile sm:bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <div
            className="below-fold"
            style={{ contentVisibility: "auto", containIntrinsicSize: "500px" }}
          >
            <Suspense fallback={<LoadingFallback />}>
              <About />
            </Suspense>
            {isMobile ? <br></br> : <div></div>}
            <Suspense fallback={<LoadingFallback />}>
              <Experience />
            </Suspense>
            <Suspense fallback={<LoadingFallback />}>
              {isMobile ? <TechCard /> : <Tech />}
            </Suspense>
            {isMobile ? <br></br> : <div></div>}
            <Suspense fallback={<LoadingFallback />}>
              <Works />
            </Suspense>
          </div>
          {/* May change Feedback to Tech Content API fetching articles */}
          {/* <Feedbacks /> https://www.youtube.com/watch?v=0fYi8SGA20k 2:01:05 */}
          {/* {isMobile ? <br></br> : <div></div>} */}
          {isMobile ? <br></br> : <div></div>}
          <div className="text-center">
            <p className="text-secondary text-[17px] max-w-8xl leading-[30px] mt-10">
              More projects soon to be announced!
            </p>
          </div>
          <div className="relative z-0">
            <Suspense fallback={<LoadingFallback />}>
              <Contact />
              <StarsCanvas />
            </Suspense>
          </div>
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
