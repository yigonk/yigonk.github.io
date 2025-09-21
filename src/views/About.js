import React from "react";
import aboutImg from "../assets/images/about.jpg";

const About=()=> {
  return (
    <section id="about" className="section about">
      <div className="about__wrap">
        {/* Left: single paragraph copy */}
        <div className="about__text">
          <h2 className="about__title">About Me</h2>
          <p className="about__p">
            I was born and raised in South Korea <span aria-hidden="true">🇰🇷</span> before moving to Calgary, Canada <span aria-hidden="true">🇨🇦</span> in 2015. I am studying Mechanical Engineering <span aria-hidden="true">⚙️</span> with an Aerospace Minor at the University of Calgary. I am passionate <span aria-hidden="true">🔥</span> about combining engineering and leadership <span aria-hidden="true">🤝</span> to create innovations <span aria-hidden="true">💡</span> that make a meaningful impact on people and communities <span aria-hidden="true">🌍</span>. My strengths include mechanical HVAC systems design <span aria-hidden="true">📐</span> and product/mechanical design engineering (CAD, FEA, CFD, prototyping, manufacturing) <span aria-hidden="true">🛠️</span>. I also bring strong software proficiency <span aria-hidden="true">💻</span> that amplifies the value of engineering in today’s world. I stay active through soccer <span aria-hidden="true">⚽</span> and squash, and I keep creativity alive through photography <span aria-hidden="true">📷</span> and traveling <span aria-hidden="true">✈️</span>.
          </p>
        </div>
        {/* Right: portrait */}
        <figure className="about__media">
          <img className="about__img about__img--sq" src={aboutImg} alt="Yigon Kim"/>
          <figcaption className="about__cap">Winery in Kelowna, BC</figcaption>
        </figure>
      </div>
    </section>
  );
};

export default About;
