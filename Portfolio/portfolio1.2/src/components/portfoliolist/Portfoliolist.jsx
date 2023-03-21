import React from "react";
import "./portfoliolist.scss";
export const Portfoliolist = ({ title, active, setSelected, id }) => {
  return (
    <li
      className={active ? "portfoliolist active" : "portfoliolist"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
};
