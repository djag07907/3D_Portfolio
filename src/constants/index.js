// <!-- -----------------------------------------------------------------
// @copyright    (C) 2023 SoAS
// @file         index.js
// @author       Daniel Alvarez <josamogax@gmail.com>
// @brief        Portfolio index of constants information file.
// @details      File in which the information of the portfolio can be modified.
// ------------------------------------------------------------------ -->

import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  // redux,
  tailwind,
  // typescript,
  // threejs,
  flutter,
  illustrator,
  photoshop,
  kotlin,
  mysql,
  postgresql,
  powerbi,
  reactnative,
  vue,
  wordpress,
  bootstrap,
  django,
  python,
  mailchimp,
  meta,
  shopify,
  starbucks,
  tesla,
  carrent,
  jobit,
  tripguide,
  acklen,
  paic,
  revelo,
  soas,
  caeh,
  hosanna,
  tato,
  gotitnoted,
  karlasl,
  developing,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Software Developer",
    icon: web,
  },
  {
    title: "Mobile Software Developer",
    icon: mobile,
  },
  {
    title: "UX/UI Designer & Developer",
    icon: backend,
  },
  {
    title: "SEO Tech Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
    detail: "Advanced",
  },
  {
    name: "CSS 3",
    icon: css,
    detail: "Advanced",
  },
  {
    name: "JavaScript",
    icon: javascript,
    detail: "Advanced",
  },
  // {
  //   name: "Bootstrap",
  //   icon: bootstrap,
  //   detail: "Bootstrap Advanced",
  // },
  {
    name: "Dart/Flutter",
    icon: flutter,
    detail: "Advanced",
  },
  {
    name: "React JS",
    icon: reactjs,
    detail: "Intermediate",
  },
  {
    name: "React Native",
    icon: reactnative,
    detail: "Intermediate",
  },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  //   detail: "Tailwind Beginner",
  // },
  {
    name: "Kotlin",
    icon: kotlin,
    detail: "Advanced",
  },
  {
    name: "VueJS",
    icon: vue,
    detail: "Advanced",
  },
  // {
  //   name: "Python",
  //   icon: python,
  //   detail: "Python Intermediate",
  // },
  // {
  //   name: "Django",
  //   icon: django,
  //   detail: "Django Intermediate",
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  //   detail: "NodeJS Intermediate",
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  //   detail: "MongoDB Intermediate",
  // },
  // {
  //   name: "Git",
  //   icon: git,
  //   detail: "Git/Github Advanced",
  // },
  // {
  //   name: "MySQL",
  //   icon: mysql,
  //   detail: "MySQL Intermediate",
  // },
  {
    name: "PostgreSQL",
    icon: postgresql,
    detail: "Advanced",
  },
  {
    name: "PowerBI",
    icon: powerbi,
    detail: "Advanced",
  },
  {
    name: "Figma",
    icon: figma,
    detail: "Advanced",
  },
  {
    name: "WordPress",
    icon: wordpress,
    detail: "Expert",
  },
  {
    name: "MailChimp",
    icon: mailchimp,
    detail: "Expert",
  },
  // {
  //   name: "Adobe Illustrator",
  //   icon: illustrator,
  //   detail: "Illustrator Advanced",
  // },
  // {
  //   name: "Adobe PhotoShop",
  //   icon: photoshop,
  //   detail: "PhotoShop Advanced",
  // },
];

const experiences = [
  {
    title: "FullStack Software Engineer",
    company_name: "Acklen Avenue - Full Time remote",
    icon: acklen,
    iconBg: "#383E56",
    date: "April 2023 - Present",
    points: [
      "Backend development for API consumptions.",
      "React and Salesforce development.",
      "Agile, Lean and multidisciplinary team collaborations with Kanban and XP methodologies.",
      "SOLID principles learning and Clean Coding practices...",
    ],
  },
  {
    title: "Front End Web/Mobile Developer & MKT Tech Support",
    company_name: "PAiC - Full Time remote",
    icon: paic,
    iconBg: "#383E56",
    date: "October 2020 - February 2023",
    points: [
      "Design and Development of UX/UI - oriented interfaces for international clients in both Web and Mobile environments.",
      "Front-End development in projects from verticals such as Business Solutions, e-Commerce and Telecom.",
      "Agile team management and multidisciplinary team collaborations.",
      "SEO optimization and Google Analytics implementation for corporate websites with MKT campaign management on social media.",
    ],
  },
  {
    title: "Tech SEO Content Writer",
    company_name: "Revelo LATAM - Freelance",
    icon: revelo,
    iconBg: "#E6DEDD",
    date: "November 2022 - Present",
    points: [
      "Freelance technology content writer for both beginners and advanced developers with SEO content writing.",
    ],
  },
  {
    title: "Freelance Developer & Entrepreneur",
    company_name: "SoAS - Freelance",
    icon: soas,
    iconBg: "#E6DEDD",
    date: "Jan 2016 - Present",
    points: [
      "CEO and Founder of 'Son of Alva Solutions' (Micro software development and graphic design corporate)",
      "Graphic design and Web development projects such as LPs, innovative mobile apps, Management Systems, and Banners for small local companies.",
      "CMS (WordPress/Joomla) implementation and support for local and international companies.",
      "Social/Educational mobile app development and active regional tech challenges competitor.",
      "Former CEO and Associate of Café Pelao MSME with HR and Operative management.",
    ],
  },
  {
    title: "IT & Project Manager",
    company_name: "CAEH - Contract",
    icon: caeh,
    iconBg: "#383E56",
    date: "March 2019 - July 2019",
    points: [
      "ISO 22301, ISO 9001 e ISO 20001 Implementation.",
      "Internal network infrastructure project management and collegiate systems.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Tech support assistance to collegiate members.",
    ],
  },
  {
    title: "Computer Science and Robotics teacher",
    company_name: "Hosanna - Contract",
    icon: hosanna,
    iconBg: "#E6DEDD",
    date: "Jan 2020 - July 2020",
    points: [
      "Leading teacher of Professional technical baccalaureate in Computer Science.",
      "LMS implementation and management for classes during the pandemic crisis.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Tato Platform",
    description:
      "Contact center platform for offering and acquiring professional services. Professional job seekers can register into the platform and be contacted by customers in several locations. Currently designed for Honduras as main country, but more development is undergoing to expand it even further.",
    tags: [
      {
        name: "kotlin",
        color: "orange-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "mobile",
        color: "pink-text-gradient",
      },
    ],
    image: tato,
    source_code_link: "https://github.com/",
  },
  {
    name: "Got It Noted",
    description:
      "Note-taking app that allows you to easily create multiple note in various formats, attach multimedia content, and access them later. With a powerful search function and note management, it helps the user to stay organized and productive. Currently undergoing a complete redesign and development process to improve UX/UI and overall note management.",
    tags: [
      {
        name: "kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "mobile",
        color: "pink-text-gradient",
      },
    ],
    image: gotitnoted,
    source_code_link: "https://github.com/",
  },
  {
    name: "Karla SL",
    description:
      "KARLA SL, by its initials: Knowledge Application to Reliably Learn and Assist in Sign Language, is a mobile app (to be converted into a fully functional platform) that assists both hearing and deaf people to communicate by voice and text modules and features to learn the Honduran Sign Language. Currently under development phase.",
    tags: [
      {
        name: "kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "mobile",
        color: "pink-text-gradient",
      },
    ],
    image: karlasl,
    source_code_link: "https://github.com/",
  },
  {
    name: "Project under development 1",
    description: "TBA.",
    tags: [
      {
        name: "tag1",
        color: "blue-text-gradient",
      },
      {
        name: "tag2",
        color: "green-text-gradient",
      },
      {
        name: "tag3",
        color: "pink-text-gradient",
      },
    ],
    image: developing,
    source_code_link: "https://github.com/",
  },
  {
    name: "Project under development 2",
    description: "TBA.",
    tags: [
      {
        name: "tag1",
        color: "blue-text-gradient",
      },
      {
        name: "tag2",
        color: "green-text-gradient",
      },
      {
        name: "tag3",
        color: "pink-text-gradient",
      },
    ],
    image: developing,
    source_code_link: "https://github.com/",
  },
  {
    name: "Project under development 3",
    description: "TBA.",
    tags: [
      {
        name: "tag1",
        color: "blue-text-gradient",
      },
      {
        name: "tag2",
        color: "green-text-gradient",
      },
      {
        name: "tag3",
        color: "pink-text-gradient",
      },
    ],
    image: developing,
    source_code_link: "https://github.com/",
  },
  // {
  //   name: "Project under development 4",
  //   description: "TBA.",
  //   tags: [
  //     {
  //       name: "tag1",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "tag2",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tag3",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: developing,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
