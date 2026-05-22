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
        const f = parseFloat(css.getPropertyValue("--pFactor")) || 0.3;
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

  const hashtags = [
    "# Mechanical Engineer-In-Training (EIT)",
  ];

  return (
    <section
      ref={ref}
      id="home"
      className="hero hero--parallax hero--left"
      style={{
        "--heroTop": "140px",
        "--heroH": "100vh",
        "--pFactor": ".22",
        "--bgBias": "60%",
        "--heroTitle": "clamp(48px, 8vw, 88px)",
        "--titleGap": "16px",
        "--titleToTag": "8px",
        // Adjust --heroPadX or --heroOffsetX to shift the text horizontally,
        // and tweak --heroTop to move it up or down.
        "--heroPadX": "clamp(32px, 5vw, 56px)",
        "--heroPadTop": "120px",
        "--heroPadBottom": "0px",
        "--heroTextMax": "clamp(380px, 50vw, 720px)",
        "--heroOffsetX": "36px",
        "--heroInsetMax": "320px",
        "--heroInsetStop": "1600px",
        "--heroInsetEase": ".26",
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
          }}
        >
          <span className="line">Hello!</span>
          <span className="line">I&apos;m Yigon</span>
        </h1>
        <ul className="hero__hashtags" aria-label="Personal descriptors">
          {hashtags.map((tag) => (
            <li key={tag} className="hero__hashtag">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
