import React from "react";
import AdminLayout from "../layout/AdminLayout";
import { Row, Col, Form, Button } from "react-bootstrap";
import { CustomForm } from "../../customComponents/CustomForm";
import { Link } from "react-router-dom";
import Footer from "../layout/Footer";
const LoginPage = () => {
  const loginFields = [
    {
      label: "Email",
      placeholder: "Roshan@gmail.com",
      type: "email",
      required: "true",
      name: "email",
    },
    {
      label: "Password",
      placeholder: "*******",
      type: "password",
      required: "true",
      name: "password",
    },
  ];
  return (
    <>
      <div className="login-main p-5">
        <Row className="loginrow bg-white">
          <Col className="loginbg"></Col>
          <Col className=" d-flex flex-column justify-content-center rounded">
            <div className="loginformbackground">
              <div className="text-center ">Welcome to Admin CMS</div>
              <hr />
              <Form>
                <div className="fields p-3">
                  {loginFields.map((item, index) => {
                    return <CustomForm {...item} />;
                  })}
                </div>

                <div className="text-end mt-2">
                  <Link> forgot password?</Link>
                </div>
                <div className=" d-flex justify-content-center align-items-center mt-3">
                  <Button variant="info ">Login</Button>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <hr />
                  <span>or</span>
                  <hr />
                </div>
                <div className="d-flex justify-content-center">
                  <p>
                    New here?{" "}
                    <span>
                      {" "}
                      <Link to="/register">Create Account</Link>{" "}
                    </span>
                  </p>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
