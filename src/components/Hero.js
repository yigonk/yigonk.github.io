import React, { useEffect, useRef } from "react";
import heroImg from "../assets/images/hero.jpg";

const Hero = () => {
  const ref = useRef(null);

  /* parallax background (photo moves, text stays) */
  useEffect(() => {
    const el = ref.current;
    if (!el) {
      return;
    }
    let ticking = false;
    const onScroll = () => {
      if (ticking) {
        return;
      }
      ticking = true;
      requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const maxScroll = Math.max(r.height - vh, 0);
        const scrolled = Math.min(Math.max(-r.top, 0), maxScroll);

        const css = getComputedStyle(el);
        const f = parseFloat(css.getPropertyValue("--pFactor")) || 0.25;
        el.style.setProperty("--pY", `${scrolled * f}px`);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      ref={ref}
      id="home"
      className="hero hero--parallax hero--left"
      style={{
        "--heroTop": "24px",
        "--heroH": "100vh",
        "--pFactor": ".22",
        "--bgBias": "48%",
      }}
    >
      <div
        className="hero__bg"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      <div className="hero__overlay" />
      <div className="hero__sides" />

      <div className="hero__content">
        <h1
          className="hero__title hero__h1 text-gradient"
          style={{
            "--gradY": "35%",
            "--gradScale": "140%",
            "--titleGap": "8px",
            "--heroTitle": "80px",
          }}
        >
          <span className="line">Hello</span>
          <span className="line">I&apos;m Yigon</span>
        </h1>
        <p className="hero__sub clamp-2">
          "Designing systems and innovations that benefit individuals and
          communities worldwide."
        </p>
      </div>
    </section>
  );
};

export default Hero;
