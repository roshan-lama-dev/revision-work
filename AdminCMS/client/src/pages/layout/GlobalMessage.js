import React from "react";
import Container from "react-bootstrap/esm/Container";

const GlobalMessage = () => {
  return (
    <div className="bg-dark text-white p-1">
      <Container className="d-flex justify-content-between align-items-center">
        <div>Call us for inquiry</div>
        <div className="icons d-flex justify-content-between gap-2">
          <div className="text-danger">
            <i className="fa-brands fa-youtube"></i>
          </div>
          <div className="text-info">
            <i className="fa-brands fa-facebook"></i>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GlobalMessage;
