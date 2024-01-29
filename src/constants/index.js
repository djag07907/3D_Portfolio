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
  csharp,
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
  soasm,
  mindmap,
  webanimation,
  mobileanimation,
  uxui,
  seo,
} from "../assets";

// import { webanimation, mobileanimation, uxui, seo } from "../assets/animations";

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
    id: "tech",
    title: "Tech",
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

const services = [
  {
    title: "Web Software Development",
    icon: web,
    // import("../assets/animations/Animation - 1706186375806.json"),
  },
  {
    title: "Mobile Software Development",
    icon: mobile,
    // import("../assets/animations/Animation - 1706186930975.json"),
  },
  {
    title: "UX/UI Design & Development",
    icon: backend,
    // import("../assets/animations/Animation - 1706187999424.json"),
  },
  {
    title: "Software Consultancy",
    icon: creator,
    // import("../assets/animations/Animation - 1706188074793.json"),
  },
];

const technologies = [
  {
    name: "HTML5",
    icon: html,
    detail: "Expert",
  },
  {
    name: "CSS3",
    icon: css,
    detail: "Expert",
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
    detail: "Advanced",
  },
  {
    name: "React Native",
    icon: reactnative,
    detail: "Advanced",
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
    name: "C#",
    icon: csharp,
    detail: "Intermediate",
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
  {
    name: "Node JS",
    icon: nodejs,
    detail: "Intermediate",
  },
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
  // {
  //   name: "MailChimp",
  //   icon: mailchimp,
  //   detail: "Expert",
  // },
];

const experiences = [
  {
    title: "FullStack Software Engineer",
    company_name: "Acklen Avenue - Full Time remote",
    icon: acklen,
    iconBg: "#383E56",
    date: "April 2023 - October 2023",
    points: [
      "FullStack Software Development with React/TS, C# and RESTApi.",
      "Agile and multidisciplinary team collaborations with Kanban and XP methodologies using SOLID principles, MVC, Project Refinement and Clean Coding practices.",
      "CI/CD using GitLab and SonarCloud for code quality.",
      "Skills: NodeJs, ReactJs, TypeScript, JavaScript, C#, TailwindCSS, Rest API, JSON, MVC and Trello.",
    ],
  },
  {
    title: "Front End Web/Mobile Developer & MKT Tech Support",
    company_name: "PAiC - Full Time remote",
    icon: paic,
    iconBg: "#383E56",
    date: "October 2020 - February 2023",
    points: [
      "Front-end design and development for projects with UX/UI-oriented interfaces for Int'l clients in both Web and Mobile platforms from verticals such as Business Solutions, e-Commerce, and Telecom.",
      "Agile/SCRUM Team Management and multidisciplinary team collaborations.",
      "SEO optimization + Google Analytics implementation for corporate websites with MKT campaign management on social media.",
      "Skills: ReactJs, TypeScript, JavaScript, React Native, Flutter, TailwindCSS, Rest API, JSON, XML, SQL, Jira, Figma, PowerBI, Google Analytics, WordPress and MailChimp.",
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
    date: "Jan 2018 - Present",
    points: [
      "CEO and Founder of 'Son of Alva Solutions'",
      "Design and development of projects such as LPs, Innovative web/mobile apps, Custom Management Systems, Social/Educational software for local and Int'l companies, using CMS, frameworks, BaaS and deployments in AWS/Heroku/GitHub.",
      "Active regional tech challenges competitor.",
      "Former CEO and Associate of Cafe Pelao MSME with HR and Ops Management.",
      "Skills: NodeJS/Strapi, ReactJs, TypeScript, React Native, Flutter, TailwindCSS, Django, Trello, Jira, PostgreSQL, MySQL, Rest API, JSON, Figma, AWS, Heroku, GitHub Pages, Firebase, Google Analytics, WordPress and MailChimp.",
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
      "Skills: JavaScript, WordPress and Joomla.",
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
      "Skills: EdModo, MS Office, PSeInt and C++.",
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
    source_code_link: "https://www.youtube.com/watch?v=huN8egefT2Y",
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
        name: "android",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "orange-text-gradient",
      },
      {
        name: "mobile",
        color: "pink-text-gradient",
      },
    ],
    image: gotitnoted,
    source_code_link:
      "https://play.google.com/store/apps/details?id=solutions.alva.of.son.gotItNoted&pcampaignid=web_share",
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
        name: "android",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "orange-text-gradient",
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
    name: "SoAS Landing Page",
    description:
      "My Entrepreneur website for Software Development, Graphic Design, and IT Services Company.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "emailjs",
        color: "green-text-gradient",
      },
      {
        name: "vite",
        color: "orange-text-gradient",
      },
      {
        name: "lottie_animations",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
    ],
    image: soasm,
    source_code_link: "https://sonofalvasolutions.com/",
  },
  {
    name: "Spot Mind-mapping",
    description:
      "Demo version of the Mind-mapping web app that is under beta review and testing. It has features such as Node adding, local browser mind-map saving, node connections. More features to be added.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "reactflow",
        color: "green-text-gradient",
      },
      {
        name: "vite",
        color: "orange-text-gradient",
      },
      {
        name: "localstorage",
        color: "pink-text-gradient",
      },
      {
        name: "web",
        color: "blue-text-gradient",
      },
    ],
    image: mindmap,
    source_code_link: "https://spot-mindmapping.danielalvarez-dev.com/",
  },
  {
    name: "CODENAME: BSC-23",
    description:
      "Real State platform for searching, publishing and managing properties, agent contact and management, profile management and geolocation. App and web platform soon to be released this 2024!",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "strapi",
        color: "pink-text-gradient",
      },
      {
        name: "aws",
        color: "orange-text-gradient",
      },
      {
        name: "reactjs",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
      {
        name: "auth",
        color: "orange-text-gradient",
      },
      {
        name: "payment-gateway",
        color: "blue-text-gradient",
      },
      {
        name: "ios",
        color: "orange-text-gradient",
      },
      {
        name: "android",
        color: "green-text-gradient",
      },
      {
        name: "web",
        color: "blue-text-gradient",
      },
      {
        name: "multiplatform",
        color: "pink-text-gradient",
      },
    ],
    image: developing,
    source_code_link: "https://github.com/",
  },
  {
    name: "CODENAME: MSR-23",
    description:
      "Digital Wallet and Business management platform for money transfer, commercial offers, locale management, team management, and coupons. Soon to be released this 2024!",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "ruby",
        color: "pink-text-gradient",
      },
      {
        name: "heroku",
        color: "orange-text-gradient",
      },
      {
        name: "aws",
        color: "orange-text-gradient",
      },
      {
        name: "kyc",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "ios",
        color: "blue-text-gradient",
      },
      {
        name: "android",
        color: "green-text-gradient",
      },
      {
        name: "mobile",
        color: "blue-text-gradient",
      },
      {
        name: "multiplatform",
        color: "orange-text-gradient",
      },
    ],
    image: developing,
    source_code_link: "https://www.masari-app.com",
  },
  {
    name: "CODENAME: MUSHU-23",
    description:
      "Pet platform for multiple pet profile management, medical records and veterinary suggestions with freemium and premium accounts, donation system and food reviews. Beta to be released late this 2024!",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
      {
        name: "reactjs",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "web",
        color: "orange-text-gradient",
      },
      {
        name: "ios",
        color: "blue-text-gradient",
      },
      {
        name: "android",
        color: "green-text-gradient",
      },
      {
        name: "multiplatform",
        color: "orange-text-gradient",
      },
    ],
    image: developing,
    source_code_link: "https://sonofalvasolutions.com/",
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
