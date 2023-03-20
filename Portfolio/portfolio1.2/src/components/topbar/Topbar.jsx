import React from "react";
import "./topbar.scss";
import PersonIcon from "@mui/icons-material/Person";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export const Topbar = () => {
  return (
    <div className="topbar active" id="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Roshan.
          </a>
          <div className="itemContainer">
            <PersonIcon className="icon" />
            <span>+61 0451 431 998</span>

            <div className="itemContainer">
              <LinkedInIcon className="icon" />
            </div>
          </div>
        </div>

        <div className="right">
          <div className="hamburger">
            <span className="line1"></span>
            <span className="line1"></span>
            <span className="line1"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
