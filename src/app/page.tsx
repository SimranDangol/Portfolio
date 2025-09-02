import About from "@/components/Home/About";
import Contact from "@/components/Home/Contact";
import Experience from "@/components/Home/Experience";
import Footer from "@/components/Home/Footer";
import Home from "@/components/Home/HeroSection";
import Projects from "@/components/Home/Projects";
import Skill from "@/components/Home/Skill";
import React from "react";

const page = () => {
  return (
    <div>
      <Home />
      <About />
      <Skill />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default page;
