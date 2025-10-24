import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const JSONLD = () => {
  const generateJSONLD = () => {
    return {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Daniel Alvarez Portfolio",
      description: "This is my portfolio website.",
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
    };
  };

  useEffect(() => {
    const jsonld = generateJSONLD();
    Helmet.renderStatic(() => (
      <script type="application/ld+json"> {JSON.stringify(jsonld)} </script>
    ));
  }, []);

  return null;
};

export default JSONLD;
