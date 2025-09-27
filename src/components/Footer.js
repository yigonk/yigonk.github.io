import React from "react";
import { useLocation } from "react-router-dom";

const Footer = ({ forceDark = false }) => {
  const year = new Date().getFullYear();
  const { pathname } = useLocation();
  const isPhoto = forceDark || pathname.startsWith("/photo");

  return (
    <footer className={`footer${isPhoto ? " footer--dark" : ""}`}>
      <div className="footer__inner">
        © {year} Yigon Kim, All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
