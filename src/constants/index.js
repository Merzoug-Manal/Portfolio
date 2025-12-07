import {
  github,
  menu,
  close,
  css,
  bootstrap,
  docker,
  figma,
  mysql,
  git,
  html,
  Laravel,
  postgresql,
  postman,
  javascript,
  mongodb,
  express,
  vercel,
  sql,
  nodejs,
  reactjs,
  php,
  redux,
  nextjs,
  vitest,
  tailwind,
  scss,
  typescript,
  SAHM,
  PRODA,
  KingFood,
  JobFinder,
  ZenFit,
  Medisys,
  todo_list,
  FitStyle
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "projects",
      title: "Projects",
    },
   
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
 
  const technologies = [
    {
      name: "HTML5",
      icon: html,
    },
    {
      name: "CSS3",
      icon: css,
    },
     {
      name: "SCSS",
      icon: scss,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "ReactJS",
      icon: reactjs,
    },
     {
      name: "Nextjs",
      icon: nextjs,
    },
      {
      name: "Redux",
      icon: redux,
    },
    {
      name: "Node.JS",
      icon: nodejs,
    },
     {
      name: "Express.JS",
      icon: express,
    },
    {
      name: "PHP",
      icon: php,
    },
    {
      name: "Laravel",
      icon: Laravel,
    },
     {
      name: "SQL",
      icon: sql,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "PostgreSQL",
      icon: postgresql,
    },
   
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Github",
      icon: github,
    },
     {
      name: "Postman",
      icon: postman,
    },
    {
      name: "Figma",
      icon: figma,
    },
    {
      name: "Docker",
      icon: docker,
    },
    {
      name: "Vercel",
      icon: vercel,
    },
  ];
  
  const experiences = [
     {
      title: "Frontend Developer ",
      company_name: "Proda-Connect",
      icon: PRODA,
      iconBg: "white",
      date: "January 2025 - July 2025",
      points: [
        " Developed and maintained responsive user interfaces for a SaaS platform using React.js, TypeScript, and Tailwind CSS.",
        " Integrated and customized open-source UI components to enhance design consistency and efficiency.",
        "Collaborated with backend developers to ensure seamless API integration and dynamic functionality.",
        
      ],
    },
   
    {
      title: "Software Engineer (Intern)",
      company_name: "SAHM",
      icon: SAHM,
      iconBg: "white",
      date: "January 2024 - June 2024",
      points: [
        "Developed backend functionalities using Python and machine learning techniques to automate manual processes in the iSell 365 project.",
        "Implemented client grouping into sales routes, scheduling programs,route optimization and other automation tasks to improve efficiency and reduce manual work.",
        
      ],
    }
   
   
  ];
  
  
  
  const projects = [
    {
      name: "FitStyle",
      description:
        "FitStyle is a full-stack e-commerce application allows users to browse and consult available equipment, add items to the cart, and place orders. On the other hand, sellers have a dashboard where they can manage products, update details, and track customer orders.",
      tags: [
        {
          name: "Nextjs",
          color: "blue-text-gradient",
        },
        {
          name: " TailwindCSS",
          color: "green-text-gradient",
        },
        {
          name: "Mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: FitStyle,
      live_preview_link:"https://e-commerce-rho-three-79.vercel.app/"
    },
    {
      name: "KingFood",
      description:
        "FoodKing is my latest Full-Stack MERN application designed for order placement and management. Users can sign up, browse the menu, place food orders, and confirm their purchases. On the other hand, the admin has full control to manage orders and update or modify the items in the menu.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: " Node.js",
          color: "green-text-gradient",
        },
        {
          name: "Mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: KingFood,
      source_code_link: "https://github.com/Merzoug-Manal/Food-Delivery",
      live_preview_link:"https://food-delivery-frontend-te1l.onrender.com"
    },
    {
      name: "JobFinder",
      description:
        "JobFinder is a web application for e-recruitment and job market management, built using a microservices architecture.  This project was part of my 4th-year studies at the High School of Computer Science in Sidi Bel Abbès. My primary role was as the frontend developer, focusing on creating an intuitive and user-friendly interface.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "Spring Boot",
          color: "pink-text-gradient",
        },
      ],
      image: JobFinder,
      source_code_link: "https://github.com/Merzoug-Manal/JobFinder",
    
    },
    {
      name: "ZenFit",
      description:
        "This is a modern and interactive fitness web application where I applied my knowledge of TypeScript and Tailwind CSS. The platform allows users to explore the gym's offered classes and provides an easy way to join. It showcases my skills in creating responsive and visually appealing frontend designs while delivering a seamless user experience.",

      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "green-text-gradient",
        },
        {
          name: "TypeScipt",
          color: "pink-text-gradient",
        },
      ],
      image: ZenFit,
      source_code_link: "https://github.com/Merzoug-Manal/Fitness-Application",
      live_preview_link:"https://merzoug-manal.github.io/Fitness-Application/"
    },
    
    {
      name: "Medisys",
      description:
        "A web application for managing medicines, designed to efficiently handle essential CRUD (Create, Read, Update, Delete) operations. The application streamlines the management of medicine records, stock levels, and categories, providing an intuitive solution for organizing and tracking pharmaceutical inventory.",
      tags: [
        {
          name: "Laravel",
          color: "blue-text-gradient",
        },
        {
          name: "PHP",
          color: "green-text-gradient",
        },
        {
          name: "MySql",
          color: "pink-text-gradient",
        },
      ],
      image: Medisys,
      source_code_link: "https://github.com/Merzoug-Manal/Medicine-Management-System---Laravel",
    },
    {
      name: "ToDo_List",
      description:
       " A to-do list app developed for personal use to efficiently manage daily tasks. The application features full CRUD functionality, allowing users to create, update, delete tasks, and mark them as complete using a checkbox. It is designed to streamline task management and improve productivity.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: todo_list,
      source_code_link: "https://github.com/Merzoug-Manal/React-Todo-List-App",
      live_preview_link:"https://merzoug-manal.github.io/React-Todo-List-App/"
    },
  ];
  
  export { technologies, experiences,  projects };
  