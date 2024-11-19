import React from "react";
import { Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        
        <h3 className={styles.sectionHeadText}>About Me</h3>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4  text-[16px]  leading-[30px]'
      >
      <p>Hello, I'm <span className="text-[#E966A0] " >Manal Merzoug</span>, a dedicated and enthusiastic full-stack developer . I recently earned both a Master's Degree and an Engineering Diploma from the High School of Computer Science in Sidi Bel Abbès, specializing in Information Systems and Web Development. My journey into technology has been both challenging and rewarding, and I am excited to channel my skills into creating impactful digital solutions.</p><br/>
      <p >I have hands-on experience with technologies such as HTML, CSS, JavaScript, PHP, Node.js, and MySQL. To stay aligned with evolving industry standards, I have also explored modern tools like TypeScript and Tailwind CSS, reflecting my commitment to continuous learning and adaptability in a fast-paced field. Beyond technical skills, I thrive in dynamic and collaborative environments, enjoying opportunities to solve complex problems and devise innovative solutions.</p><br/>
      My time as a university club member has honed my soft skills, including effective communication, teamwork, and time management, which have proven invaluable in managing projects and meeting deadlines. I am deeply passionate about software development and embrace challenges as opportunities to grow, refine my problem-solving capabilities, and expand my expertise.
      </motion.p>

      
    </>
  );
};

export default SectionWrapper(About, "about");
