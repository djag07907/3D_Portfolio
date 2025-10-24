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
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../style";
import TechCard from "./TechCard";
import { Helmet } from "react-helmet-async";

const Tech = () => {
  return (
    <>
      <Helmet>
        <title>Daniel Alvarez - Tech Skills</title>
        <meta
          name="description"
          content="During my career as a Software Engineer, I've obtained a diverse skill
          set and a wide range of valuable experience with different
          technologies. My preferred Tech Stack is the following."
        />
      </Helmet>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>My Tech Stack</p> */}
        <h2 className={styles.sectionHeadText}>My Tech Stack</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          During my career as a Software Engineer, I've obtained a diverse skill
          set and a wide range of valuable experience with different
          technologies. My preferred Tech Stack is the following:
        </motion.p>
      </div>
      <div className="mt-10 flex flex-row flex-wrap justify-center gap-12">
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
    </>
  );
};

export default SectionWrapper(Tech, "tech");
