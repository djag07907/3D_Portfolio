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
        <Experience />
        {isMobile ? <TechCard /> : <Tech />}
        <Works />
        {/* May change Feedback to Tech Content API fetching articles */}
        {/* <Feedbacks /> https://www.youtube.com/watch?v=0fYi8SGA20k 2:01:05 */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
