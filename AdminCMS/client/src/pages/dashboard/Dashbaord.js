import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import DashboardLayout from "../layout/DashboardLayout";
import { Row, Col } from "react-bootstrap";
const Dashbaord = () => {
  return (
    <DashboardLayout>
      <Container>Dashboard</Container>
      <div className="livechat">
        <div className="vertical bg-dark text-white">
          <span>Live Chat</span>{" "}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashbaord;
