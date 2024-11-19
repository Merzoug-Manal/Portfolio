import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  return (
    <div>
      <h2 className={`${styles.sectionHeadText} text-center mb-8`}>My Skills.</h2>
      <br />

      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-24 h-24 relative group" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full 
                             bg-[595B83] text-white text-s font-medium py-1 px-2 rounded 
                             opacity-0 group-hover:opacity-100 transition-opacity">
              {technology.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "skills");
