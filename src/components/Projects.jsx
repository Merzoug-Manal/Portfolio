import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import {  mdiEyeOutline, mdiEyeOffOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { useTheme } from "./ThemeContext";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_preview_link
}) => {
  const { theme } = useTheme(); 
  const contentStyle = theme === "light" ? "bg-white" : "bg-tertiary"; 
  const TextStyle = theme === "light" ? "text-[#060930]" : "text-white";
  const DescriptionStyle = theme === "light" ? "text-[#8682a0]" : "text-secondary";

  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="w-full sm:w-auto"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className={`${contentStyle} p-5 rounded-2xl w-full sm:w-[360px]`} 
      >
        <div className="relative w-full h-[230px] group overflow-hidden rounded-2xl">
          {/* Project Image */}
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
          />

          {/* GitHub Side */}
          <div className="absolute inset-y-0 left-0 w-1/2 h-full bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>

          {/* Live Preview Side */}
          <div className="absolute inset-y-0 right-0 w-1/2 h-full bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {live_preview_link ? (
              <div
                onClick={() => window.open(live_preview_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <Icon
                  path={mdiEyeOutline}
                  size={1}
                  color="white"
                  alt="live preview"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            ) : (
              <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-not-allowed">
                <Icon
                  path={mdiEyeOffOutline}
                  size={1}
                  color="white"
                  alt="no preview available"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            )}
          </div>
        </div>

        <div className='mt-5'>
          <h3 className={`${TextStyle} font-bold text-[24px]`}>{name}</h3>
          <p className={`mt-2 ${DescriptionStyle} text-[14px]`}>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div 
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="flex items-center justify-center">
          <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
        </div>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className='text-secondary text-[17px] w-full leading-[30px]' 
        >
        </motion.p>
      </div>

      <div className='mt-16 flex flex-wrap  gap-3'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");