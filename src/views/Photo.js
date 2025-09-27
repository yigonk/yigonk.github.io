import React, { useEffect } from "react";

const Photo = () => {
  // Flip body into dark mode while this page is mounted
  useEffect(() => {
    document.body.classList.add("body--dark");
    return () => document.body.classList.remove("body--dark");
  }, []);

  return (
    <div className="page page--dark">
      <section className="section">
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
