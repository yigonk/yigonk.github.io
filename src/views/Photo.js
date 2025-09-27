import React, { useEffect, useLayoutEffect, useState } from "react";

const Photo = () => {
  // Flip body into dark mode while this page is mounted
  useLayoutEffect(() => {
    document.body.classList.add("body--dark");
    return () => document.body.classList.remove("body--dark");
  }, []);

  const [ready, setReady] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setReady(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <div className={`page page--dark photo${ready ? " photo--ready" : ""}`}>
      <div className="photo__veil" aria-hidden="true" />
      <section className="section photo__content">
        <h2>Photo</h2>
        <p>
          Photography gallery coming soon. This will showcase travel, lifestyle,
          and engineering shots.
        </p>
      </section>
    </div>
  );
};

export default Photo;
