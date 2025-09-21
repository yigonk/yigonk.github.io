import React,{useState} from "react";
import {Link} from "react-router-dom";

const NavBar=()=> {
  const [open,setOpen]=useState(false);
  const toggle=()=> {setOpen((v)=>!v);};
  const close=()=> {setOpen(false);};

  return (
    <header className="nav">
      <div className="nav__wrap">
        <div className="nav__brand"><Link to="/" onClick={close}>Yigon Kim</Link></div>
        <button className="nav__toggle" aria-expanded={open} aria-controls="nav-menu" onClick={toggle}>☰</button>
        <nav id="nav-menu" className={`nav__menu${open?" nav__menu--open":""}`}>
          <a href="/#about" onClick={close} className="nav__link">About</a>
          <a href="/#projects" onClick={close} className="nav__link">Projects</a>
          <a href="/#experience" onClick={close} className="nav__link">Experience</a>
          <a href="/#contact" onClick={close} className="nav__link">Contact</a>
          <Link to="/photo" onClick={close} className="nav__link">Photo</Link>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
