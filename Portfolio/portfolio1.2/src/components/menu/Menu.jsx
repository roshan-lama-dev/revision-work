import React from "react";
import "./menu.scss";
export const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#Portfolio">Portfolio</a>
        </li>
        {/* <li onClick={() => setMenuOpen(false)}>
          {" "}
          <a href="#work">Work</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#testimonial">Testimonail</a>
        </li> */}
        <li onClick={() => setMenuOpen(false)}>
          {" "}
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};
