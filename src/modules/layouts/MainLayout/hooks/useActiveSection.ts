import { useEffect, useState } from "react";

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      const educationSection = document.getElementById("education");
      const projectsSection = document.getElementById("projects");

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      if (
        aboutSection &&
        educationSection &&
        projectsSection &&
        scrollPosition >= aboutSection.offsetTop - 200 &&
        scrollPosition < educationSection.offsetTop + 200
      ) {
        setActiveSection("about");
      } else if (
        educationSection &&
        projectsSection &&
        scrollPosition >= educationSection.offsetTop + 100 &&
        scrollPosition < projectsSection.offsetTop + 100
      ) {
        setActiveSection("education");
      } else if (projectsSection && scrollPosition >= projectsSection.offsetTop) {
        setActiveSection("projects");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return activeSection
}