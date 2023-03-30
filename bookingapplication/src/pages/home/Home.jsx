import React from "react";
import { Featured } from "../../components/featured/Featured";
import { FeaturedProperties } from "../../components/featureProperties/FeaturedProperties";
import { Header } from "../../components/header/Header";
import { Maillist } from "../../components/mailList/Maillist";
import { Navbar } from "../../components/navbar/Navbar";
import { Property } from "../../components/property/Property";
import "./home.scss";
export const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      {/* use display flex for the entire section of the page and the give flex direction of column then give gap */}
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse By Property Type</h1>
        <Property />
        <h1 className="homeTitle">Browse By Property Type</h1>
        <FeaturedProperties />
        <Maillist />
      </div>
    </div>
  );
};
