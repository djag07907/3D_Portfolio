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
  htmlcssjs,
  nestjs,
  nextjs,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  // redux,
  tailwind,
  typescript,
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
  tectrans,
  tato,
  gotitnoted,
  karlasl,
  developing,
  soasm,
  mindmap,
  webanimation,
  webanimation1,
  mobileanimation,
  mobileanimation1,
  uxui,
  software,
  link,
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
    icon: webanimation1,
  },
  {
    title: "App Software Development",
    icon: mobileanimation1,
  },
  {
    title: "UX/UI Design",
    icon: uxui,
  },
  {
    title: "Software Consultancy",
    icon: software,
  },
];

const technologies = [
  {
    name: "HTML+CSS+JS",
    icon: htmlcssjs,
    detail: "Expert",
  },
  {
    name: "React JS",
    icon: reactjs,
    detail: "Expert",
  },
  {
    name: "TypeScript",
    icon: typescript,
    detail: "Expert",
  },
  {
    name: "NextJs",
    icon: nextjs,
    detail: "Advanced",
  },
  {
    name: "Node JS",
    icon: nodejs,
    detail: "Advanced",
  },
  {
    name: "NestJs",
    icon: nestjs,
    detail: "Advanced",
  },

  // {
  //   name: "Bootstrap",
  //   icon: bootstrap,
  //   detail: "Bootstrap Advanced",
  // },
  {
    name: "Flutter",
    icon: flutter,
    detail: "Expert",
  },

  {
    name: "React Native",
    icon: reactnative,
    detail: "Expert",
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
    title: "Front-End Flutter Developer",
    company_name: "Tecnología Transaccional - Full Time office",
    icon: tectrans,
    iconBg: "#383E56",
    date: "April 2024 - Present",
    points: [
      "Designed and developed bespoke frontend solutions for web and mobile platforms with Flutter, enhancing UX and system performance.",
      "Led Agile SCRUM teams, integrating Factory/Singleton patterns, MVVM/MVC architecture, and SOLID principles for maintainability and code quality.",
      "Implemented custom BLOC state management and modularization strategies for scalability.",
      "Developed reusable widget libraries to accelerate delivery timelines.",
      "Defined, developed, and structured web and mobile project templates to establish coding standards and best practices for Flutter and Angular development, improving consistency across teams and tech stacks.",
      "Skills: Flutter, BLOC, Angular, TypeScript, TailwindCSS, Factory Method, Singleton, SOLID, Modularization, REST API, MVVM, MVC, Architecture, Cross-Platform Development.",
    ],
  },
  {
    title: "FullStack Software Engineer",
    company_name: "Acklen Avenue - Full Time remote",
    icon: acklen,
    iconBg: "#383E56",
    date: "April 2023 - October 2023",
    points: [
      "Delivered full-stack applications with React.js, TypeScript, C#, and REST APIs for diverse scalable business solutions.",
      "Collaborated in Agile teams using Kanban/XP methodologies, applying SOLID principles, MVC architecture, and clean coding practices.",
      "Implemented CI/CD pipelines with GitLab and SonarCloud, enhancing code reliability and deployment speed.",
      "Skills: Node.js, React.js, TypeScript, C#, TailwindCSS, REST API, MVC, Agile Methodologies, CI/CD, Code Quality.",
    ],
  },
  {
    title: "Front End Web/Mobile Developer & MKT Tech Support",
    company_name: "PAiC - Full Time remote",
    icon: paic,
    iconBg: "#383E56",
    date: "October 2020 - February 2023",
    points: [
      "Delivered tailored frontend solutions for web and mobile platforms for international clients in e-commerce, telecom, and other industries.",
      "Led multidisciplinary teams using Agile SCRUM methodologies, improving collaboration and accelerating project delivery.",
      "Optimized corporate websites for SEO and integrated Google Analytics, enhancing visibility, traffic tracking, and digital marketing effectiveness.",
      "Skills: React.js, Next.js, Vue.js, TypeScript, React Native, Flutter, BLOC, TailwindCSS, REST API, SQL, Jira, Figma, Power BI, Google Analytics, WordPress, and MailChimp.",
    ],
  },
  {
    title: "Tech SEO Content Writer",
    company_name: "Revelo LATAM - Freelance",
    icon: revelo,
    iconBg: "#E6DEDD",
    date: "November 2022 - December 2023",
    points: [
      "Produced SEO-optimized technical content for beginner and advanced developers, enhancing visibility and engagement for engineering-focused platforms.",
    ],
  },
  {
    title: "Freelance Developer & Entrepreneur",
    company_name: "SoAS - Freelance",
    icon: soas,
    iconBg: "#E6DEDD",
    date: "Jan 2018 - Present",
    points: [
      "Founded and manage SoAS, delivering web and mobile solutions for local and international clients, including e-commerce platforms, digital wallets, real estate systems, and custom management tools.",
      "Designed and implemented solutions across diverse tech stacks, integrating payment gateways, BaaS, and deploying applications on AWS, Heroku, Firebase, and GitHub for scalability and reliability.",
      "Active in regional tech challenges to keep expertise and a competitive edge.",
      "Directed operations as the former CEO of Café Pelao MSME, overseeing HR and aligning business goals with technical execution.",
      "Skills: Node.js, Strapi, Nest.js, React.js, Next.js, TypeScript, React Native, Flutter, PostgreSQL, REST API, Figma, AWS, Heroku, Firebase, WordPress, and MailChimp.",
    ],
  },
  {
    title: "IT & Project Manager",
    company_name: "CAEH - Contract",
    icon: caeh,
    iconBg: "#383E56",
    date: "March 2019 - July 2019",
    points: [
      "Implemented ISO 22301, ISO 9001, and ISO 20001.",
      "Integrated and managed internal network projects and collegiate systems.",
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
      "Implemented and managed LMS platform classes during the pandemic crisis.",
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
    source_code_link: "https://buscasa.net/",
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
