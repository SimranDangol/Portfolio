import Contact from "@/components/Home/Contact";
import Education from "@/components/Home/Education";
import Experience from "@/components/Home/Experience";
import Footer from "@/components/Home/Footer";
import Home from "@/components/Home/HeroSection";
import Projects from "@/components/Home/Projects";
import Skill from "@/components/Home/Skill";
import React from "react";

const page = () => {
  return (
    <main>
      <Home />
      <Experience />
      <Projects />
      <Skill />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
};

export default page;
