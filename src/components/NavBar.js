import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const SECTIONS = ["about", "projects", "experience", "contact"];

const NavBar = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);

  const normalizePath = (path) => {
    if (!path) return "/";
    const trimmed = path.replace(/\/+$/, "");
    if (!trimmed) return "/";
    return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  };

  const homePath = useMemo(() => {
    const publicUrl = process.env.PUBLIC_URL;
    if (!publicUrl || publicUrl === ".") return "/";
    try {
      const url = new URL(publicUrl, "http://localhost");
      return normalizePath(url.pathname);
    } catch (err) {
      return normalizePath(publicUrl);
    }
  }, []);

  const currentPath = normalizePath(pathname);
  const isHome =
    currentPath === homePath ||
    currentPath === `${homePath}/index.html` ||
    (homePath === "/" && currentPath === "/index.html");
  const isPhoto = currentPath.startsWith("/photo");

  const getNavHeight = () => {
    const v = getComputedStyle(document.documentElement)
      .getPropertyValue("--navH")
      .trim();
    const n = parseInt(v.replace("px", ""), 10);
    return Number.isFinite(n) ? n : 56;
  };

  // Glass state: black-transparent over hero, light glass after scroll
  useEffect(() => {
    const onScroll = () => {
      const onHome = isHome;
      const atTop = window.scrollY < 80;
      setSolid(!(onHome && atTop));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  // Scroll spy (home only)
  useEffect(() => {
    if (!isHome) {
      setActive("");
      return;
    }
    const topOffset = getNavHeight() + 1;
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
  }, [isHome]);

  // Hide nav once hero is scrolled past
  useEffect(() => {
    if (!isHome) {
      setHidden(false);
      return;
    }

    const hero = document.getElementById("home");
    if (!hero) {
      setHidden(false);
      return;
    }

    const updateHidden = () => {
      const rect = hero.getBoundingClientRect();
      const navHeight = getNavHeight();
      setHidden(rect.bottom <= navHeight);
    };

    updateHidden();
    window.addEventListener("scroll", updateHidden, { passive: true });
    window.addEventListener("resize", updateHidden);
    return () => {
      window.removeEventListener("scroll", updateHidden);
      window.removeEventListener("resize", updateHidden);
    };
  }, [isHome]);

  const close = () => setMenuOpen(false);

  return (
    <header
      className={`nav ${solid ? "nav--glass" : "nav--clear"} ${
        isPhoto ? "nav--dark nav--compact nav--showToggle" : ""
      }${hidden ? " nav--hidden" : ""}`}
    >
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
