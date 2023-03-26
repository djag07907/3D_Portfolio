// <!-- -----------------------------------------------------------------
// @copyright    (C) 2023 SoAS
// @file         Tech.jsx
// @author       Daniel Alvarez <josamogax@gmail.com>
// @brief        Component to display the tech stacks 3D information.
// @details
// ------------------------------------------------------------------ -->

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import TechCard from "./TechCard";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-12">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
          {/* <TechCard icon={technology.icon} /> */}
          <p className="text-secondary text-center font-semibold">
            {technology.detail}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
