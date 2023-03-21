import React, { useEffect, useState } from "react";
import { Portfoliolist } from "../portfoliolist/Portfoliolist";
import "./portfolio.scss";

import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";
export const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Full Stack",
    },
    {
      id: "design",
      title: "Real Life Project",
    },
  ];

  const [data, setData] = useState([]);
  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;

      case "web":
        setData(webPortfolio);
        break;

      case "mobile":
        setData(mobilePortfolio);
        break;

      case "design":
        setData(designPortfolio);
        break;

      case "content":
        setData(contentPortfolio);
        break;
    }
  }, [selected]);

  return (
    <div className="portfolio" id="Portfolio">
      <h1>Portfolio</h1>

      <ul>
        {list.map((item) => {
          return (
            <Portfoliolist
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
          );
        })}
      </ul>

      <div className="conatiner">
        {data.map((item) => {
          return (
            <div className="item">
              <img src={item.img} alt="app" />
              <h3>{item.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};
