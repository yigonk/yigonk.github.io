import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const SECTIONS = ["about", "projects", "experience", "contact"];

const readNavHeight = () => {
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue("--navH")
    .trim();
  const parsed = parseInt(raw.replace("px", ""), 10);
  return Number.isFinite(parsed) ? parsed : 56;
};

const NavBar = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const [solid, setSolid] = useState(false);
  const [visible, setVisible] = useState(true);

  const isPhoto = pathname.startsWith("/photo");

  // Glass state: black-transparent over hero, light glass after scroll
  useEffect(() => {
    const onScroll = () => {
      const onHome = pathname === "/";
      const atTop = window.scrollY < 80;
      setSolid(!(onHome && atTop));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    if (!visible) {
      setMenuOpen(false);
    }
  }, [visible]);

  // Hide nav after leaving hero on the home page, but keep it visible
  // whenever the user is at the very top of the page.
  useEffect(() => {
    if (pathname !== "/") {
      setVisible(true);
      return undefined;
    }

    const hero = document.getElementById("home");
    if (!hero) {
      setVisible(true);
      return undefined;
    }

    const navH = readNavHeight();
    let heroVisible = false;

    const updateVisibility = () => {
      const atTop = window.scrollY <= navH;
      const darkMode = document.body.classList.contains("body--dark");
      setVisible(heroVisible || atTop || darkMode);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        heroVisible = Boolean(entry?.isIntersecting);
        updateVisibility();
      },
      { rootMargin: `-${navH}px 0px 0px 0px`, threshold: 0 },
    );
    observer.observe(hero);

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateVisibility);
    };
  }, [pathname]);

  // Scroll spy (home only)
  useEffect(() => {
    if (pathname !== "/") {
      setActive("");
      return;
    }
    const topOffset = readNavHeight() + 1;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: `-${topOffset}px 0px -80% 0px`, threshold: 0 },
    );
    const els = SECTIONS.map((id) => document.getElementById(id)).filter(
      Boolean,
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [pathname]);

  const close = () => setMenuOpen(false);

  const classes = [
    "nav",
    solid ? "nav--glass" : "nav--clear",
    isPhoto ? "nav--dark nav--compact nav--showToggle" : "",
    visible ? "" : "nav--hidden",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={classes}>
      <div className="nav__wrap">
        {/* Left: brand */}
        <div className="nav__brand">
          <Link to="/" onClick={close}>
            Yigon Kim
          </Link>
        </div>

        {/* Center links (hidden on Photo via nav--compact) */}
        <nav className="nav__center">
          <a
            href="/#about"
            className={`nav__link${active === "about" ? " nav__link--active" : ""}`}
          >
            About
          </a>
          <a
            href="/#projects"
            className={`nav__link${active === "projects" ? " nav__link--active" : ""}`}
          >
            Projects
          </a>
          <a
            href="/#experience"
            className={`nav__link${active === "experience" ? " nav__link--active" : ""}`}
          >
            Experience
          </a>
          <a
            href="/#contact"
            className={`nav__link${active === "contact" ? " nav__link--active" : ""}`}
          >
            Contact
          </a>
        </nav>

        {/* Right: Photo link (hidden on Photo via nav--compact) + hamburger */}
        <div className="nav__right">
          <Link to="/photo" className="nav__link nav__photo">
            Photo
          </Link>

          <button
            type="button"
            className="nav__toggle"
            aria-expanded={menuOpen}
            aria-controls="nav-menu"
            aria-label="Open menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile/compact dropdown (kept white even in dark mode) */}
      <div
        id="nav-menu"
        className={`nav__dropdown${menuOpen ? " nav__dropdown--open" : ""}`}
        onClick={close}
      >
        <a
          href="/#about"
          className={`nav__dlink${active === "about" ? " nav__dlink--active" : ""}`}
        >
          About
        </a>
        <a
          href="/#projects"
          className={`nav__dlink${active === "projects" ? " nav__dlink--active" : ""}`}
        >
          Projects
        </a>
        <a
          href="/#experience"
          className={`nav__dlink${active === "experience" ? " nav__dlink--active" : ""}`}
        >
          Experience
        </a>
        <a
          href="/#contact"
          className={`nav__dlink${active === "contact" ? " nav__dlink--active" : ""}`}
        >
          Contact
        </a>
        <Link to="/photo" className="nav__dlink">
          Photo
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
