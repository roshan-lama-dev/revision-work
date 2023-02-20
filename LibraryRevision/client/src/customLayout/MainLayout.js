import React from "react";
import { Footer } from "./Footer";
import { Headers } from "./Headers";

export const MainLayout = ({ children }) => {
  return (
    <div>
      <Headers />
      <div className="main">{children}</div>
      <Footer />
    </div>
  );
};
