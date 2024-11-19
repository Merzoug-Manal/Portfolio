import { motion } from "framer-motion";
import { styles } from "../styles";
import ReactGA from "react-ga4";
import { ReactTyped } from "react-typed";
import Resume from "../assets/Resume.pdf";
import "./hero.css";
import image from "../assets/pc.png";

const Hero = () => {
  const trackDownloadResume = () => {
    ReactGA.event({
      category: "Download",
      action: "Download Resume",
    });
  };

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[160px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#E966A0]" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#E966A0] to-[#060930]" />
        </div>

        <div>
          <h2 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#E966A0]">Manal</span>
          </h2>
          <h2 className="text-xl mt-8 mb-20">
            A{" "}
            <span className="inline-block font-semibold text-[#E966A0]">
              <ReactTyped
                strings={["Full-Stack Developer", "Software Engineer"]}
                typeSpeed={80}
                backSpeed={80}
                loop
              />
            </span>
          </h2>

          <a
            className="btn"
            href={Resume}
            download="Resume"
            onClick={trackDownloadResume}
          >
            Download Resume
          </a>
        </div>

        {/* Image Section */}
        <div className="absolute top-0 right-0 w-1/2 h-full flex justify-center items-center hidden md:block">
          <img src={image} alt="PC" className="w-full h-full object-contain" />
        </div>
      </div>
    </section>
  );
};

export default Hero;