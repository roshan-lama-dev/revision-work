import React from "react";
import Container from "react-bootstrap/esm/Container";
import Footer from "./Footer";
import GlobalMessage from "./GlobalMessage";
import Header from "./Header";

const AdminLayout = ({ children }) => {
  return (
    <div>
      <GlobalMessage />
      <Header />
      <div className="main mt-3">
        <Container>{children}</Container>
      </div>
      <Footer />
    </div>
  );
};

export default AdminLayout;
