import React from "react";
import { Helmet } from "react-helmet-async";

const JSONLD = () => {
  const generateJSONLD = () => {
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          "@id": "https://danielalvarez-dev.com/#person",
          name: "Daniel Alvarez",
          jobTitle: "Digital Partner & Full Stack Software Engineer",
          url: "https://danielalvarez-dev.com/",
          sameAs: ["https://www.linkedin.com/in/djag-dev"],
          description:
            "Digital Partner & Full Stack Software Engineer with over five years of experience building web and mobile applications.",
          knowsAbout: [
            "Software Engineering",
            "Web Development",
            "Mobile Development",
            "Flutter",
            "React Native",
            "Next.js",
            "Angular",
            "Node.js",
            "TypeScript",
            "Firebase",
            "Cloud Platforms",
          ],
        },
        {
          "@type": "WebSite",
          "@id": "https://danielalvarez-dev.com/#website",
          url: "https://danielalvarez-dev.com/",
          name: "Daniel Alvarez Portfolio",
          publisher: {
            "@id": "https://danielalvarez-dev.com/#person",
          },
        },
        {
          "@type": "WebPage",
          "@id": "https://danielalvarez-dev.com/#webpage",
          url: "https://danielalvarez-dev.com/",
          name: "Daniel Alvarez | Digital Partner & Full Stack Software Engineer",
          description:
            "Portfolio website of Daniel Alvarez, a Digital Partner & Full Stack Software Engineer specializing in Flutter, React Native, Next.js, Node.js, and Firebase.",
          about: {
            "@id": "https://danielalvarez-dev.com/#person",
          },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://danielalvarez-dev.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "About",
                item: "https://danielalvarez-dev.com/#about",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Work",
                item: "https://danielalvarez-dev.com/#work",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Tech",
                item: "https://danielalvarez-dev.com/#tech",
              },
              {
                "@type": "ListItem",
                position: 5,
                name: "Projects",
                item: "https://danielalvarez-dev.com/#projects",
              },
              {
                "@type": "ListItem",
                position: 6,
                name: "Contact",
                item: "https://danielalvarez-dev.com/#contact",
              },
            ],
          },
        },
      ],
    };
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(generateJSONLD())}
      </script>
    </Helmet>
  );
};

export default JSONLD;
