// <!-- -----------------------------------------------------------------
// @copyright    (C) 2023 SoAS
// @file         Work.jsx
// @author       Daniel Alvarez <josamogax@gmail.com>
// @brief        Component to display the work and projects section information.
// @details
// ------------------------------------------------------------------ -->

import ParallaxTilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { github, link } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Helmet } from "react-helmet";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  // Spring is the type of animation
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      {/* Project card structure */}
      <ParallaxTilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        {/* Project card properties */}
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            title="project-title"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              {/* To open GitHub repository */}
              <img
                src={link}
                alt="Link to Project"
                title="project-link"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        {/* Project cards text properties */}
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        {/* Project cards tech stack hashtags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </ParallaxTilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <Helmet>
        <title>Daniel Alvarez - Professional Portfolio</title>
        <meta
          name="description"
          content="Daniel Alvarez's portfolio of real-world projects provides a
          comprehensive showcase of his skills and expertise, with each project
          carefully curated to demonstrate his capacity for effective project
          management and problem-solving."
        />
      </Helmet>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          As a seasoned Software Engineer, I pride myself on my ability to
          tackle complex challenges and work with a diverse range of
          technologies. My portfolio of real-world projects provides a
          comprehensive showcase of my skills and expertise, with each project
          carefully curated to demonstrate my capacity for effective project
          management and problem-solving. You can explore the technical depths
          of each project and witness firsthand the quality of my work.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
