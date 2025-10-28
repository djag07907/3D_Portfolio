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
  buscasa,
  masari,
  techblog,
  powerboard,
  novaaetherium,
  emailgenerator,
  angulartemplate,
  pecunia,
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
  // FLUTTER PROJECTS
  {
    name: "BUSCASA",
    description:
      "Full-stack real estate marketplace platform connecting property seekers with agents through intelligent geolocation search and secure transactions. Streamlines property discovery, agent communication, and deal closures with integrated payment processing across mobile and web platforms.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "strapi",
        color: "green-text-gradient",
      },
      {
        name: "bloc",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
      {
        name: "authentication",
        color: "green-text-gradient",
      },
      {
        name: "payment-gateway",
        color: "pink-text-gradient",
      },
      {
        name: "geolocation",
        color: "pink-text-gradient",
      },
      {
        name: "aws",
        color: "orange-text-gradient",
      },
      {
        name: "i18n",
        color: "pink-text-gradient",
      },
      {
        name: "modular-design",
        color: "green-text-gradient",
      },
      {
        name: "multiplatform",
        color: "pink-text-gradient",
      },
    ],
    image: buscasa,
    source_code_link: "https://buscasa.net/",
  },
  {
    name: "Pecunia - Personal Finance Manager",
    description:
      "Web financial wellness platform that transforms spending habits through intelligent budgeting and visual analytics. Empowers users to achieve financial goals with multi-currency support, automated tracking, and actionable insights for smarter money management.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "bloc",
        color: "green-text-gradient",
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
        name: "authentication",
        color: "green-text-gradient",
      },
      {
        name: "charts",
        color: "pink-text-gradient",
      },
      {
        name: "i18n",
        color: "pink-text-gradient",
      },
      {
        name: "modular-design",
        color: "green-text-gradient",
      },
      {
        name: "multiplatform",
        color: "pink-text-gradient",
      },
    ],
    image: pecunia,
    source_code_link: "",
  },
  {
    name: "CODENAME: MUSHU-23",
    description:
      "Complete pet care platform revolutionizing how owners manage their pets' health and wellness. Combines digital medical records, veterinary guidance, and community insights with subscription-based premium features and seamless appointment scheduling with your favorite registered veterinarian.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "bloc",
        color: "green-text-gradient",
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
        name: "authentication",
        color: "green-text-gradient",
      },
      {
        name: "subscription-model",
        color: "pink-text-gradient",
      },
      {
        name: "payment-gateway",
        color: "pink-text-gradient",
      },
      {
        name: "notifications",
        color: "green-text-gradient",
      },
      {
        name: "i18n",
        color: "pink-text-gradient",
      },
      {
        name: "modular-design",
        color: "green-text-gradient",
      },
      {
        name: "multiplatform",
        color: "pink-text-gradient",
      },
    ],
    image: developing,
    source_code_link: "https://sonofalvasolutions.com/",
  },
  {
    name: "Powerboard - PBI Dashboard Manager",
    description:
      "Enterprise BI solution that centralizes data visualization and reporting for multi-national teams. Accelerates decision-making through role-based dashboard access, automated insights, and collaborative analytics with granular license control.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "powerbi",
        color: "blue-text-gradient",
      },
      {
        name: "strapi",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
      {
        name: "authentication",
        color: "green-text-gradient",
      },
      {
        name: "rbac",
        color: "green-text-gradient",
      },
      {
        name: "license-management",
        color: "pink-text-gradient",
      },
      {
        name: "analytics",
        color: "pink-text-gradient",
      },
      {
        name: "i18n",
        color: "pink-text-gradient",
      },
      {
        name: "modular-design",
        color: "green-text-gradient",
      },
      {
        name: "multi-tenant",
        color: "green-text-gradient",
      },
    ],
    image: powerboard,
    source_code_link: "",
  },

  // NEXT.JS PROJECTS
  {
    name: "Nova Aetherium",
    description:
      "Scalable evaluation platform that modernizes academic competitions and tech fairs. Eliminates manual judging bottlenecks with real-time scoring, automated workflows, and live leaderboards, supporting hundreds of concurrent evaluations with complete administrative oversight.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
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
        name: "authentication",
        color: "green-text-gradient",
      },
      {
        name: "rbac",
        color: "green-text-gradient",
      },
      {
        name: "realtime-sync",
        color: "pink-text-gradient",
      },
      {
        name: "auto-setup",
        color: "pink-text-gradient",
      },

      {
        name: "i18n",
        color: "pink-text-gradient",
      },
      {
        name: "modular-design",
        color: "green-text-gradient",
      },
    ],
    image: novaaetherium,
    source_code_link: "https://nova-aetherium.vercel.app/",
  },
  {
    name: "Developer Blog Platform",
    description:
      "Headless CMS project built specifically for personal technical content creation and education. Streamlines software development blogging with code syntax highlighting, version-controlled posts, and SEO optimization, driving audience engagement through analytics-backed insights.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "strapi",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
      {
        name: "authentication",
        color: "green-text-gradient",
      },
      {
        name: "cms",
        color: "pink-text-gradient",
      },
      {
        name: "seo",
        color: "pink-text-gradient",
      },

      {
        name: "i18n",
        color: "pink-text-gradient",
      },
      {
        name: "modular-design",
        color: "green-text-gradient",
      },
    ],
    image: techblog,
    source_code_link: "",
  },
  {
    name: "Email Signature Generator",
    description:
      "Intuitive web tool that creates professional, branded email signatures in minutes. Eliminates design complexity with selectable templates, real-time preview, and universal email client compatibility, perfect for teams maintaining consistent corporate identity.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "i18n",
        color: "pink-text-gradient",
      },
      {
        name: "modular-design",
        color: "green-text-gradient",
      },
      {
        name: "drag-drop",
        color: "pink-text-gradient",
      },
      {
        name: "html-export",
        color: "pink-text-gradient",
      },
      {
        name: "responsive",
        color: "blue-text-gradient",
      },
    ],
    image: emailgenerator,
    source_code_link: "https://email-signature-generator-rosy.vercel.app/",
  },

  // REACT NATIVE PROJECTS
  {
    name: "MASARI",
    description:
      "Enterprise fintech platform merging digital wallet capabilities with multi-location business operations. Enables secure money transfers, KYC-compliant onboarding, and promotional campaigns while providing transaction analytics for data-driven business growth.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "ruby",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
      {
        name: "authentication",
        color: "green-text-gradient",
      },
      {
        name: "kyc",
        color: "pink-text-gradient",
      },
      {
        name: "payment-gateway",
        color: "pink-text-gradient",
      },
      {
        name: "encryption",
        color: "green-text-gradient",
      },
      {
        name: "aws",
        color: "orange-text-gradient",
      },
      {
        name: "heroku",
        color: "orange-text-gradient",
      },
      {
        name: "i18n",
        color: "pink-text-gradient",
      },
      {
        name: "modular-design",
        color: "green-text-gradient",
      },
      {
        name: "multiplatform",
        color: "pink-text-gradient",
      },
    ],
    image: masari,
    source_code_link: "https://www.masari-app.com",
  },

  // REACT.JS PROJECTS
  {
    name: "SoAS Landing Page",
    description:
      "Corporate website that converts visitors into clients through engaging animations and seamless user experience. Showcases comprehensive service offerings with optimized load times and interactive contact capabilities.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
      {
        name: "lottie",
        color: "pink-text-gradient",
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
        name: "i18n",
        color: "pink-text-gradient",
      },
      {
        name: "modular-design",
        color: "green-text-gradient",
      },
      {
        name: "corporate",
        color: "blue-text-gradient",
      },
    ],
    image: soasm,
    source_code_link: "https://sonofalvasolutions.com/",
  },
  {
    name: "Spot Mind-Mapping",
    description:
      "Visual thinking tool that transforms ideas into structured mind maps instantly. Enhances brainstorming and project planning with intuitive node connections, persistent storage, and simple design, enabling teams to visualize complex concepts effortlessly.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "reactflow",
        color: "pink-text-gradient",
      },
      {
        name: "localstorage",
        color: "green-text-gradient",
      },
      {
        name: "drag-drop",
        color: "pink-text-gradient",
      },
      {
        name: "vite",
        color: "orange-text-gradient",
      },
      {
        name: "responsive",
        color: "blue-text-gradient",
      },
    ],
    image: mindmap,
    source_code_link: "https://spot-mindmapping.danielalvarez-dev.com/",
  },

  // ANGULAR PROJECTS
  {
    name: "Angular Backoffice Template",
    description:
      "Production-ready enterprise template that accelerates admin panel development by 60%. Provides secure authentication simulation, modular architecture, and best-practice patterns out-of-the-box, reducing time-to-market for internal management systems.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "authentication",
        color: "green-text-gradient",
      },
      {
        name: "jwt",
        color: "green-text-gradient",
      },
      {
        name: "i18n",
        color: "pink-text-gradient",
      },
      {
        name: "modular-design",
        color: "green-text-gradient",
      },
      {
        name: "routing",
        color: "pink-text-gradient",
      },
      {
        name: "lazy-loading",
        color: "pink-text-gradient",
      },
      {
        name: "responsive",
        color: "blue-text-gradient",
      },
    ],
    image: angulartemplate,
    source_code_link: "https://sonofalvasolutions.com/",
  },

  // KOTLIN/ANDROID PROJECTS
  {
    name: "Tato Platform",
    description:
      "On-demand service marketplace bridging the gap between skilled professionals and clients across regions. Streamlines job discovery, real-time communication, and secure bookings with intelligent geolocation matching and reputation management.",
    tags: [
      {
        name: "kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
      {
        name: "authentication",
        color: "green-text-gradient",
      },
      {
        name: "geolocation",
        color: "pink-text-gradient",
      },
      {
        name: "realtime-messaging",
        color: "pink-text-gradient",
      },
      {
        name: "mvvm",
        color: "green-text-gradient",
      },
      {
        name: "android",
        color: "green-text-gradient",
      },
    ],
    image: tato,
    source_code_link: "https://www.youtube.com/watch?v=huN8egefT2Y",
  },
  {
    name: "Got It Noted",
    description:
      "Productivity-focused note-taking app that captures ideas in any format—text, voice, or checklist. Combines powerful search with offline-first design and cloud sync, ensuring your notes are always accessible and organized. Enhanced redesign in progress.",
    tags: [
      {
        name: "kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
      {
        name: "room-database",
        color: "green-text-gradient",
      },
      {
        name: "mvvm",
        color: "green-text-gradient",
      },
      {
        name: "cloud-sync",
        color: "pink-text-gradient",
      },
      {
        name: "multimedia",
        color: "pink-text-gradient",
      },
      {
        name: "android",
        color: "green-text-gradient",
      },
    ],
    image: gotitnoted,
    source_code_link:
      "https://play.google.com/store/apps/details?id=solutions.alva.of.son.gotItNoted&pcampaignid=web_share",
  },
  {
    name: "KARLA SL",
    description:
      "Accessibility platform breaking communication barriers through sign language translation and education. Connects hearing and deaf communities with voice-to-sign features, interactive learning, and social engagement, promoting inclusion through technology.",
    tags: [
      {
        name: "kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
      {
        name: "ml-kit",
        color: "pink-text-gradient",
      },
      {
        name: "speech-recognition",
        color: "green-text-gradient",
      },
      {
        name: "mvvm",
        color: "green-text-gradient",
      },
      {
        name: "gamification",
        color: "pink-text-gradient",
      },
      {
        name: "accessibility",
        color: "green-text-gradient",
      },
      {
        name: "android",
        color: "green-text-gradient",
      },
    ],
    image: karlasl,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
