import React from "react";
import SocialLinks from "./SocialLinks/SocialLinks";
import { useTheme } from "./ThemeContext";
function Footer() {
  const { theme } = useTheme(); 
  const contentStyle =
    theme === "light"
      ? { background: "#fff" , color: "#060930" }
      : { background: "#151030", color: "#fff" };
  return (
    <footer
    style={contentStyle} 
    className={`flex flex-col items-center justify-center  py-5 px-5 md:px-10  text-center`}>
    <SocialLinks />
  
    <div className="container">
      <p className="mt-4 text-sm md:text-base">
        &copy; 2024 All rights reserved | Crafted with passion by{" "}
        <span className="font-bold text-[#E966A0]">Merzoug Manal</span> | Powered by Creativity
      </p>
    </div>
  </footer>
  
  );
}

export default Footer;
