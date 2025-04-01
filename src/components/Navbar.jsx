import React from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <img src={logo} alt="Ordin logo" className="logo" />
        <ul className="link-con">
          <a href="#home" className="nav-link">
            Home
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#guideline" className="nav-link">
            Guidelines
          </a>
          <a href="#events" className="nav-link">
            Events
          </a>
          <a href="#team" className="nav-link">
            Team
          </a>
        </ul>
      </div>
    </>
  );
}
