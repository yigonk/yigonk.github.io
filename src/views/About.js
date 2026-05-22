import React from "react";
import aboutImg from "../assets/images/about.jpg";

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="about__wrap">
        <div className="about__text">
          <h2 className="about__title">About Me</h2>

          <p className="about__p">
            I was born and raised in South Korea{" "}
            <span aria-hidden="true">🇰🇷</span> before moving to Calgary, Canada{" "}
            <span aria-hidden="true">🇨🇦</span> in 2015. I completed my
            Bachelor’s degree in Mechanical Engineering with an Aerospace Minor
            at the University of Calgary in 2026. I am currently developing my
            expertise in the buildings industry with Stantec.
          </p>

          <p className="about__p">
            My core source of motivation comes from developing engineering skills
            in buildings <span aria-hidden="true">🏢</span>, planes{" "}
            <span aria-hidden="true">✈️</span>, and everyday electronics{" "}
            <span aria-hidden="true">📱</span>, with the goal of designing my own
            products and systems in the future. I am driven to become an
            entrepreneur and innovator <span aria-hidden="true">💡</span> by
            transforming my technical skills into real-world solutions that
            create meaningful impact in people’s daily lives by bringing talented
            people together.
          </p>

          <p className="about__p">
            My technical engineering foundation includes mechanical systems
            design, CAD modelling, FEA, CFD, prototyping, and manufacturing. I
            like taking initiative in applying digital tools and emerging
            technologies to improve workflows in practical engineering settings.
            One of my strengths is recognizing individual talents and bringing
            people together to create stronger collective outcomes. By maximizing
            this strength, I can be a bridge that connects technical ideas,
            people, and meaningful innovation through me.
          </p>
        </div>
        <figure className="about__media">
          <img
            className="about__img about__img--sq"
            src={aboutImg}
            alt="Yigon Kim"
          />
          <figcaption className="about__cap">Winery in Kelowna, BC</figcaption>
        </figure>
      </div>
    </section>
  );
};

export default About;