import React, { useEffect, useRef } from "react";
import "./intro.scss";

import { init } from "ityped";
export const Intro = () => {
  const effectRan = useRef(false);
  const textRef = useRef();

  // useEffect will only work one time because of the empty array

  useEffect(() => {
    if (effectRan.current === false) {
      init(textRef.current, {
        showCursor: true,
        backDelay: 1500,
        // cursorChar: "<",
        strings: ["Web Developer", "Mern Stack Developer"],
      });
    }

    return () => {
      effectRan.current = true;
    };
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/profileimg.png" alt="profilepic" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>
            {" "}
            <span style={{ color: "crimson", fontSize: "70px" }}> Hi,</span> I'm
          </h2>
          <h1>Roshan Lama</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
        </div>

        <a href="#Portfolio">
          <img src="assets/down.png" alt="down" />
        </a>
      </div>
    </div>
  );
};
