// <!-- -----------------------------------------------------------------
// @copyright    (C) 2023 SoAS
// @file         Card.jsx
// @author       Daniel Alvarez <josamogax@gmail.com>
// @brief        Component to structure the tech card information.
// @details      Mobile only
// ------------------------------------------------------------------ -->

// import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../style";
import ParallaxTilt from "react-parallax-tilt";
import { Helmet } from "react-helmet-async";

const TechCard = ({ index, name, icon, detail }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      {/* Tech card structure */}
      <ParallaxTilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        {/* Tech card properties */}
        <div className="relative w-full h-[120px]">
          <img
            src={icon}
            alt="tech_detail"
            title="tech-detail"
            className="w-full h-full object-contain rounded-2xl bg-white"
          />
        </div>
        {/* Tech cards text properties */}
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{detail}</p>
        </div>
        {/* Project cards tech stack hashtags */}
      </ParallaxTilt>
    </motion.div>
  );
};

const Techs = () => {
  return (
    <>
      {/* <Helmet>
        <title>Daniel Alvarez - Tech Skills</title>
        <meta
          name="description"
          content="During my career as a Software Engineer, I've obtained a diverse skill
          set and a wide range of valuable experience with different
          technologies. My preferred Tech Stack is the following."
        />
      </Helmet> */}
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
          technologies. My preferred Tech Stack is the following.
        </motion.p>
      </div>

      <div className="mt-10 flex flex-wrap gap-5 justify-center">
        {technologies.map((technology, index) => (
          <TechCard key={`technology-${index}`} index={index} {...technology} />
        ))}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default SectionWrapper(Techs, "tech");
// export default TechCard;
