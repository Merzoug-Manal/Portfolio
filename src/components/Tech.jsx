import { useState } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { useTheme } from "./ThemeContext";

const Tech = () => {
  const [activeTab, setActiveTab] = useState("frontend");
  const { theme } = useTheme();
  const textStyle = theme === "light" ? "text-[#060930]" : "text-white";
  const contentStyle =
    theme === "light"
      ? "bg-white"
      : "bg-gradient-to-br from-[#1a1a2e] to-[#16213e] ";
  // Categorize technologies
  const categorizedTech = {
    frontend: technologies.filter((tech) =>
      [
        "HTML5",
        "CSS3",
        "SCSS",
        "Tailwind CSS",
        "Bootstrap",
        "JavaScript",
        "TypeScript",
        "ReactJS",
        "Redux",
        "Nextjs",
      ].includes(tech.name)
    ),
    backend: technologies.filter((tech) =>
      [
        "Node.JS",
        "Express.JS",
        "PHP",
        "Laravel",
        "SQL",
        "MySQL",
        "MongoDB",
        "PostgreSQL",
      ].includes(tech.name)
    ),
    tools: technologies.filter((tech) =>
      ["Postman", "Git", "Github", "Figma", "Docker", "Vercel"].includes(
        tech.name
      )
    ),
  };

  const tabs = [
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "tools", label: "Tools & Others" },
  ];

  return (
    <div>
      <h2 className={`${styles.sectionHeadText} text-center mb-12`}>
        My Skills.
      </h2>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-12">
        <div
          className={`inline-flex ${contentStyle} rounded-full p-1.5 gap-1 md:gap-2`}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 md:px-8 py-2 md:py-3 rounded-full font-medium transition-all duration-300 text-sm md:text-base ${
                activeTab === tab.id
                  ? "bg-[#E966A0] text-white"
                  : theme === "light"
                  ? "text-gray-600 hover:text-[#060930]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab.id === "tools" ? (
                <>
                  <span className="md:hidden">Tools</span>
                  <span className="hidden md:inline">{tab.label}</span>
                </>
              ) : (
                tab.label
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="flex flex-wrap  justify-center gap-12 max-w-5xl mx-auto">
        {categorizedTech[activeTab].map((technology) => (
          <div
            key={technology.name}
            className=" flex flex-col items-center gap-4 group"
          >
            {/* Icon Container */}
            <div
              className={`${contentStyle} w-28 h-28 
                          rounded-2xl flex items-center justify-center 
                          transform transition-all duration-300 
                          group-hover:scale-110 group-hover:shadow-2xl 
                          group-hover:shadow-purple-500/50`}
            >
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-16 h-16 object-contain"
              />
            </div>

            {/* Label */}
            <span
              className={`${textStyle} text-base font-medium text-center max-w-[120px]`}
            >
              {technology.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "skills");
