import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react"; 
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { useTheme } from "./ThemeContext";
import sendAnimation from "../animation/send.json";

const Contact = () => {
  const { theme } = useTheme();
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" })); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) newErrors.email = "Email is required.";
    if (!form.message.trim()) newErrors.message = "Message is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    emailjs
      .send(
        'service_qj480rn',
        'template_el54o6w',
        {
          name: form.name,        // Changed from 'from_name' to 'name'
          email: form.email,      // Changed from 'from_email' to 'email'
          message: form.message,
        },
        'nrI8uvFxtsEA64LIO'
      )
      .then(() => {
        setLoading(false);
        setSuccess(true); 
        setForm({ name: "", email: "", message: "" }); 
      })
      .catch((error) => {
        setLoading(false);
        console.error("EmailJS Error:", error);
        
        if (error.status === 404) {
          alert("EmailJS configuration error: Account not found. Please check your Service ID, Template ID, and Public Key.");
        } else if (error.status === 401) {
          alert("EmailJS authentication error: Invalid Public Key.");
        } else {
          alert(`Failed to send message: ${error.text || "Please try again later."}`);
        }
      });
  };

  // Theme-based styles
  const divStyle = theme === "light" ? { background: "#FFFFFF", color: "#1d1836" } : { background: " #151030", color: "#fff" };
  const labelStyle = theme === "light" ? 'text-[#060930]' : 'text-white';
  const inputStyle = theme === "light" ? 'bg-white text-[#1d1836] placeholder:text-gray-500' : 'bg-tertiary text-white placeholder:text-secondary';
  const buttonStyle = theme === "light" ? 'bg-[#1d1836] text-white shadow-md' : 'bg-[#060930] text-white shadow-primary';
  const errorStyle = 'text-red-500 text-sm mt-2';

  return (
    <div className=' px-5 md:px-2 flex justify-center items-center overflow-hidden'>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        style={divStyle}
        className='w-full p-8 rounded-2xl'
      >
        <p className={`${styles.sectionSubText} ${labelStyle}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText} ${labelStyle}`}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className={`font-medium mb-4 ${labelStyle}`}>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className={`${inputStyle} py-4 px-6 rounded-lg outline-none border border-gray-300 font-medium`}
            />
            {errors.name && <div className={errorStyle}>{errors.name}</div>}
          </label>

          <label className='flex flex-col'>
            <span className={`font-medium mb-4 ${labelStyle}`}>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className={`${inputStyle} py-4 px-6 rounded-lg outline-none border border-gray-300 font-medium`}
            />
            {errors.email && <div className={errorStyle}>{errors.email}</div>}
          </label>

          <label className='flex flex-col'>
            <span className={`font-medium mb-4 ${labelStyle}`}>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What do you want to say?'
              className={`${inputStyle} py-4 px-6 rounded-lg outline-none border border-gray-300 font-medium`}
            />
            {errors.message && <div className={errorStyle}>{errors.message}</div>}
          </label>

          <button
            type='submit'
            className={`py-3 px-8 rounded-xl outline-none w-fit font-bold ${buttonStyle}`}
          >
            {loading ? "Sending..." : "Send"}
          </button>

          {success && (
            <div className="flex items-center gap-2 mt-6">
              <Lottie 
                animationData={sendAnimation} 
                loop={false} 
                style={{ width: 40, height: 40 }} 
              />
              <p className=' font-bold'>Your message has been sent successfully!👌</p>
            </div>
          )}
        </form>
      </motion.div>
    </div>
  );

};

export default SectionWrapper(Contact, "contact");