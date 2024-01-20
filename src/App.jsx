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
import TechCard from "./components/TechCard.jsx";

const App = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        {isMobile ? <br></br> : <div></div>}
        {isMobile ? <br></br> : <div></div>}
        <Experience />
        {isMobile ? <br></br> : <div></div>}
        {isMobile ? <br></br> : <div></div>}
        {isMobile ? <TechCard /> : <Tech />}
        {isMobile ? <br></br> : <div></div>}
        {isMobile ? <br></br> : <div></div>}
        <Works />
        {/* May change Feedback to Tech Content API fetching articles */}
        {/* <Feedbacks /> https://www.youtube.com/watch?v=0fYi8SGA20k 2:01:05 */}
        {isMobile ? <br></br> : <div></div>}
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
