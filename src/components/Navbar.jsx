import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import Icon from "@mdi/react";
import { mdiWeatherNight, mdiWhiteBalanceSunny } from "@mdi/js";
import { useTheme } from "./ThemeContext"; 
import "../index.css";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme(); // Use theme from context

  // Scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? (theme === "light" ? "bg-[#f0bed6]" : "bg-primary") : "bg-transparent"} transition-colors duration-300`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Manal &nbsp;
            <span className="sm:block hidden"> | Full-Stack Developer</span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title
                  ? "text-white"
                  : theme === "light"
                  ? "text-[#060930]" // light mode
                  : "text-secondary" // Default text color in dark mode
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}

          {/* Theme Toggle */}
          <li className="flex items-center cursor-pointer" onClick={toggleTheme}>
            <Icon
              path={theme === "dark" ? mdiWeatherNight : mdiWhiteBalanceSunny}
              size={1}
              className={`${theme === "dark" ? "text-white" : "text-[#E966A0]"}`}
            />
          </li>
        </ul>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 ${theme === "light" ? "pink-gradient" : "black-gradient"} absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title
                      ? "text-white"
                      : theme === "light"
                      ? "text-[#060930]" // light mode
                      : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              
              {/* Theme Toggle */}
              <li
                className="flex items-center cursor-pointer mt-4"
                onClick={toggleTheme}
              >
                <Icon
                  path={theme === "dark" ? mdiWeatherNight : mdiWhiteBalanceSunny}
                  size={1}
                  className={`${theme === "dark" ? "text-white" : "text-[#E966A0]"}`}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
