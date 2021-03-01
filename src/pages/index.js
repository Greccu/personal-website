// Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {
  About,
  Others,
  Projects,
  Skills,
} from "../components/InfoSection/Data";
import Footer from "../components/Footer";
import InfoCards from "../components/InfoCards";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...About} />
      <InfoCards />
      <InfoSection {...Skills} />
      <InfoSection {...Projects} />
      <InfoSection {...Others} />
      <Footer />
    </>
  );
};

export default Home;
