import React from "react";
import Hero from "../components/Hero";
import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";

const Home=()=> {
  return (
    <main>
      <Hero/>
      <About/>
      <Projects/>
      <Experience/>
      <Contact/>
    </main>
  );
};

export default Home;
