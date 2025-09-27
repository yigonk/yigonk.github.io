import React from "react";

const PageLoader = ({ state }) => {
  const className = `page-loader${
    state === "leaving" ? " page-loader--leaving" : ""
  }`;

  return (
    <div
      className={className}
      role="status"
      aria-live="polite"
      aria-busy={state !== "hidden"}
      aria-label="Loading home"
    >
      <div className="page-loader__spinner" aria-hidden="true" />
    </div>
  );
};

export default PageLoader;
