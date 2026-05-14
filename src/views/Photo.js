import React, { useEffect, useState } from "react";

const Photo = () => {
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
          and engineer-related shots.
        </p>
      </section>
    </div>
  );
};

export default Photo;
