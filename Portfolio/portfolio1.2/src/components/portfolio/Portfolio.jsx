import React, { useEffect, useState } from "react";
import { Portfoliolist } from "../portfoliolist/Portfoliolist";
import "./portfolio.scss";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import GitHubIcon from "@mui/icons-material/GitHub";
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
      id: "web",
      title: "Web App",
      livelink: "bookingapplication.vercel.app",
      repolink: "https://github.com/roshan-lama-dev/bookingApp",
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
              <div className="card-details">
                <h3> {item.title}</h3>{" "}
                <div className="linkbtn">
                  <a className="bicon" target="_blank" href={item.livelink}>
                    <OpenInBrowserIcon className="biconbg" />
                  </a>
                  <a className="gicon" target="_blank" href={item.repolink}>
                    <GitHubIcon className="giconbig" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
