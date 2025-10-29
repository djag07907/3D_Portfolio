// <!-- -----------------------------------------------------------------
// @copyright    (C) 2023 SoAS
// @file         Tech.jsx
// @author       Daniel Alvarez <josamogax@gmail.com>
// @brief        Component to display the tech stacks 3D information.
// @details
// ------------------------------------------------------------------ -->

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../style";
import ParallaxTilt from "react-parallax-tilt";
import { Helmet } from "react-helmet-async";

const TechCardItem = ({ index, name, icon, detail }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <ParallaxTilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl w-full"
      >
        <div className="relative w-full h-[120px]">
          <img
            src={icon}
            alt="tech_detail"
            title="tech-detail"
            className="w-full h-full object-contain rounded-2xl bg-white"
          />
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{detail}</p>
        </div>
      </ParallaxTilt>
    </motion.div>
  );
};

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
      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {technologies.map((technology, index) => (
          <TechCardItem key={`technology-${index}`} index={index} {...technology} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
