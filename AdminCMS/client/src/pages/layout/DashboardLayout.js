import React from "react";
import { SideBar } from "../../components/sidebar/SideBar";
import Footer from "./Footer";
import Header from "./Header";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <SideBar />
      <div className="main">{children}</div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
