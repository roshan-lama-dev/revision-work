import React from "react";
import "./topbar.scss";
import PersonIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"topbar " + (menuOpen && "active")} id="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Roshan.
          </a>
          <div className="itemContainer">
            <a href="https://github.com/roshan-lama-dev" target="_blank">
              {" "}
              <PersonIcon className="icongithub" />{" "}
            </a>

            <div className="itemContainer">
              <a
                href="https://www.linkedin.com/in/roshan-lama/"
                target="_blank"
              >
                <LinkedInIcon className="iconlinkedin" />
              </a>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line1"></span>
            <span className="line1"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
