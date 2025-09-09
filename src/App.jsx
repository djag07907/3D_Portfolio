// <!-- -----------------------------------------------------------------
// @copyright    (C) 2023 SoAS
// @file         App.jsx
// @author       Daniel Alvarez <josamogax@gmail.com>
// @brief        Portfolio main app file.
// @details
// ------------------------------------------------------------------ -->

import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { Helmet } from "react-helmet";
import TechCard from "./components/TechCard.jsx";
import JSONLD from "./components/JSONLD.jsx";
import "./performance-monitor.js";

const App = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Helmet>
          <title>Daniel Alvarez - Software Engineer Portfolio</title>
          <meta
            name="description"
            content="This is the Portfolio Website of Daniel Alvarez,
            a Software Engineer specialized in Web and Mobile Software Development
            as well as UX/UI."
          />
        </Helmet>
        <div className="bg-hero-pattern-mobile sm:bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <div className="below-fold" style={{ contentVisibility: 'auto', containIntrinsicSize: '500px' }}>
          <About />
          {isMobile ? <br></br> : <div></div>}
          <Experience />
          {isMobile ? <TechCard /> : <Tech />}
          {isMobile ? <br></br> : <div></div>}
          <Works />
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
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
