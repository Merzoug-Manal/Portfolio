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
      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="w-full flex justify-center"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className={`${contentStyle} p-5 rounded-2xl w-full max-w-[380px] min-h-[420px] flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300`} 
      >
        <div className="relative w-full h-[230px] group overflow-hidden rounded-2xl flex-shrink-0">
          {/* Project Image */}
          <img
            src={image}
            alt={`${name} project preview`}
            className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
          />

          {/* Overlay with buttons */}
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
            <div className="flex gap-4">
              {/* GitHub Button */}
              {source_code_link && (
                <div
                  onClick={() => window.open(source_code_link, "_blank")}
                  className="black-gradient w-12 h-12 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform duration-200 shadow-lg"
                  title="View Source Code"
                >
                  <img
                    src={github}
                    alt="source code"
                    className="w-6 h-6 object-contain"
                  />
                </div>
              )}

              {/* Live Preview Button */}
              <div
                onClick={() => live_preview_link && window.open(live_preview_link, "_blank")}
                className={`black-gradient w-12 h-12 rounded-full flex justify-center items-center transition-transform duration-200 shadow-lg ${
                  live_preview_link 
                    ? 'cursor-pointer hover:scale-110' 
                    : 'cursor-not-allowed opacity-60'
                }`}
                title={live_preview_link ? "View Live Demo" : "No Live Demo Available"}
              >
                <Icon
                  path={live_preview_link ? mdiEyeOutline : mdiEyeOffOutline}
                  size={1}
                  color="white"
                  className="w-6 h-6"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className='mt-5 flex-grow flex flex-col'>
          <h3 className={`${TextStyle} font-bold text-[24px] mb-3 line-clamp-2`}>
            {name}
          </h3>
          <p className={`${DescriptionStyle} text-[14px] leading-[22px] flex-grow line-clamp-4`}>
            {description}
          </p>

          {/* Tags Section */}
          <div className='mt-4 flex flex-wrap gap-2 pt-2'>
            {tags.map((tag) => (
              <span
                key={`${name}-${tag.name}`}
                className={`text-[12px] px-3 py-1 rounded-full border border-current ${tag.color} bg-opacity-10 backdrop-blur-sm`}
              >
                #{tag.name}
              </span>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  const { theme } = useTheme();
  const textStyle = theme === "light" ? "text-[#060930]" : "text-secondary";
  
  return (
    <>
      <motion.div 
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="flex items-center justify-center mb-8">
          <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
        </div>
      </motion.div>

      <div className='w-full flex justify-center mb-12'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className={`${textStyle} text-[17px] max-w-3xl text-center leading-[30px]`}
        >
          Following projects showcase my skills and experience through real-world examples of my work. 
          Each project is briefly described with links to code repositories and live demos.
        </motion.p>
      </div>

      {/* Improved Grid Layout */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 place-items-center w-full max-w-7xl mx-auto'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");