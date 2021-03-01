import React from "react";
import ProjectSection from "../components/InfoSection/Projects";
import {
  Project1,
  Project2,
  Project3,
  Project4,
} from "../components/InfoSection/Data";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar/projectsnavbar";
const ProjectsPage = () => {
  return (
    <>
      <Navbar />
      <ProjectSection {...Project1} />
      <ProjectSection {...Project2} />
      <ProjectSection {...Project3} />
      <ProjectSection {...Project4} />
      <Footer />
    </>
  );
};

export default ProjectsPage;
