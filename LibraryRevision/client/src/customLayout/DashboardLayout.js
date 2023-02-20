import React from "react";
import { MainLayout } from "./MainLayout";
import { SideBar } from "./SideBar";

export const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <SideBar />
      </div>

      <div className="mainLayout">
        <MainLayout children={children} />
      </div>
    </div>
  );
};
