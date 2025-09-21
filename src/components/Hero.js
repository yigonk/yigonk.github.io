import React from "react";
import heroImg from "../assets/images/hero.jpg"; // add a photo here; use any image for now

const Hero=()=> {
  return (
    <section id="home" className="hero" style={{backgroundImage:`url(${heroImg})`}}>
      <div className="hero__overlay"/>
      <div className="hero__content">
        <h1 className="hero__h1">Hello<br/>I'm Yigon</h1>
        <p className="hero__tag">Mechanical Engineering Student | Aerospace Minor | Engineering Innovator</p>
        <p className="hero__sub">"Designing systems and innovations that benefit individuals and communities worldwide."</p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="/#projects">View Projects</a>
          <a className="btn" href="/#contact">Contact</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
