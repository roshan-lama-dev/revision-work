import React from "react";

import { Button, Container } from "react-bootstrap";

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="bg-dark">
          <Container>
            <div className="topdiv p-2">
              <div className="logo">
                <h1 className="text-white text-align-start">Riteway</h1>
              </div>
              <div className="topButton d-flex justify-content-flex-end">
                <Button variant="info">
                  Back to top<i className="fa-solid fa-arrow-up"></i>
                </Button>
              </div>
            </div>
          </Container>
          {/* <hr className="bg-info" /> */}
        </div>
        <div className="bg-white text-center ">
          &copy; Riteway Food Services 2023 - All Rights Reserved.
        </div>
      </div>
    </>
  );
};
