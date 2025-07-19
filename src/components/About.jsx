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
        
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4  text-[16px]  leading-[30px]'
      >
      <p>Hello, I'm <span className="text-[#E966A0] " >Manal Merzoug</span>, a full-stack developer with a Master's Degree and an Engineering Diploma in Information Systems and Web Development from the High School of Computer Science in Sidi Bel Abbès. I'm passionate about building impactful digital solutions and constantly growing in the tech field.</p><br/>
      <p >I have experience with core technologies like HTML, CSS, JavaScript, PHP, Node.js, and MySQL, as well as modern tools like TypeScript and Tailwind CSS. I enjoy learning new technologies and working in collaborative environments to solve complex problems.</p><br/>
    Through my involvement in university clubs, I’ve developed strong soft skills such as communication, teamwork, and time management. These experiences have helped me manage projects effectively and grow both personally and professionally.
      </motion.p>

      
    </>
  );
};

export default SectionWrapper(About, "about");
