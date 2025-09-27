import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToHash from "./components/ScrollToHash";
import Home from "./views/Home";
import Photo from "./views/Photo";
import PageLoader from "./components/PageLoader";

const EXIT_DURATION = 240;
const ENTER_DURATION = 400;

const DARK_ROUTES = new Set(["/photo"]);

const App = () => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [stage, setStage] = useState("boot");
  const [loaderState, setLoaderState] = useState("visible");
  const exitingDarkRef = useRef(false);

  useEffect(() => {
    if (stage === "exiting") {
      exitingDarkRef.current = DARK_ROUTES.has(displayLocation.pathname);
    } else if (stage === "idle") {
      exitingDarkRef.current = false;
    }
  }, [stage, displayLocation.pathname]);

  const displayPath = displayLocation.pathname;
  const targetPath = location.pathname;
  const displayIsDark = DARK_ROUTES.has(displayPath);
  const targetIsDark = DARK_ROUTES.has(targetPath);

  const shellIsDark = (() => {
    if (stage === "exiting") {
      return displayIsDark || targetIsDark;
    }

    if (stage === "entering") {
      return targetIsDark || exitingDarkRef.current;
    }

    return targetIsDark;
  })();

  useLayoutEffect(() => {
    if (shellIsDark) {
      document.body.classList.add("body--dark");
    } else {
      document.body.classList.remove("body--dark");
    }
    return () => {
      document.body.classList.remove("body--dark");
    };
  }, [shellIsDark]);

  useEffect(() => {
    if (stage !== "boot") {
      return undefined;
    }

    let rafId;
    let timeoutId;

    const finishBoot = () => {
      setStage("entering");
    };

    rafId = window.requestAnimationFrame(() => {
      timeoutId = window.setTimeout(finishBoot, 140);
    });

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [stage]);

  useEffect(() => {
    if (stage === "idle" && location.pathname !== displayLocation.pathname) {
      setStage("exiting");
    }
  }, [location, displayLocation, stage]);

  useEffect(() => {
    let timeout;
    if (stage === "entering") {
      timeout = window.setTimeout(() => setStage("idle"), ENTER_DURATION);
    } else if (stage === "exiting") {
      timeout = window.setTimeout(() => {
        setDisplayLocation(location);
        setStage("entering");
      }, EXIT_DURATION);
    }
    return () => {
      if (timeout) window.clearTimeout(timeout);
    };
  }, [stage, location]);

  useEffect(() => {
    if (displayLocation.pathname !== "/" && loaderState !== "hidden") {
      setLoaderState("hidden");
      return;
    }

    if (stage !== "boot" && loaderState === "visible") {
      setLoaderState("leaving");
    }
  }, [stage, loaderState, displayLocation.pathname]);

  useEffect(() => {
    if (loaderState !== "leaving") return undefined;
    const timeout = window.setTimeout(() => setLoaderState("hidden"), 160);
    return () => window.clearTimeout(timeout);
  }, [loaderState]);

  const contentStage = useMemo(() => {
    if (stage === "boot") return "boot";
    if (stage === "entering") return "entering";
    if (stage === "exiting") return "exiting";
    return "idle";
  }, [stage]);

  const showLoader =
    displayLocation.pathname === "/" && loaderState !== "hidden";

  return (
    <>
      <NavBar />
      <main id="main" className="page-shell">
        <ScrollToHash />
        <div
          className={`page-shell__content page-shell__content--${contentStage}`}
        >
          <Routes location={displayLocation}>
            <Route path="/" element={<Home />} />
            <Route path="/photo" element={<Photo />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </main>
      {showLoader && <PageLoader state={loaderState} />}
      <Footer forceDark={shellIsDark} />
    </>
  );
};

export default App;
