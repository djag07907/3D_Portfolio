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

// import ParallaxTilt from "react-parallax-tilt";

// const TechCard = () => {
//   return (
//     <ParallaxTilt className="xs:w-[250px] w-full">
//       <img
//         src={technologies.icon}
//         alt={technologies.name}
//         className="w-16 h-16 object-contain"
//       />
//       <h3 className="text-white text-[20px] font-bold text-center">
//         {technologies.name}
//       </h3>
//       <div className="mt-20 flex flex-wrap gap-10 content-center">
//         {technologies.map((technologies) => (
//           <TechCard key={technologies.name} />
//         ))}
//       </div>
//     </ParallaxTilt>
//   );
// };

// const TechCard = () => {
//   return (
//     <div className="flex flex-row flex-wrap justify-center gap-12">
//       {technologies.map((technology) => (
//         <Card
//           key={technology.name}
//           className="w-20 border-white border-2 rounded-lg"
//         >
//           <div className="flex items-center justify-center">
//             <CardMedia
//               component="img"
//               image={technology.icon}
//               alt={technology.name}
//               className="w-15 h-15"
//             />
//           </div>

//           <CardContent className="text-center">
//             <Typography variant="body2" color="textSecondary" component="p">
//               {technology.detail}
//             </Typography>
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   );
// };

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
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>My Tech Stack</p> */}
        <h2 className={styles.sectionHeadText}>My Tech Stack</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          During my career as a Software Developer, I've obtained a diverse
          skill set and a wide range of valuable experience with different
          technologies. My preferred Tech Stack is the following.
        </motion.p>
      </div>
      <div className="mt-10 flex flex-wrap gap-5 justify-center">
        {technologies.map((technology, index) => (
          <TechCard key={`technology-${index}`} index={index} {...technology} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Techs, "");
// export default TechCard;
