import React, { useRef, useState } from "react";

import { Row, Col, Form, Button, FloatingLabel } from "react-bootstrap";
import { CustomForm } from "../../customComponents/CustomForm";
import { Link } from "react-router-dom";
import Footer from "../layout/Footer";
import { useDispatch } from "react-redux";
import { loginAdmin } from "../admin-user/AdminUserAction";
const LoginPage = () => {
  const dispatch = useDispatch();
  const emailRef = useRef("");
  const passRef = useRef("");

  const dispatch = useDispatch();
  const [loginDetails, setLoginDetails] = useState({});
  // const loginFields = [
  //   {
  //     label: "Email",
  //     placeholder: "Roshan@gmail.com",
  //     type: "email",
  //     required: "true",
  //     name: "email",
  //   },
  //   {
  //     label: "Password",
  //     placeholder: "*******",
  //     type: "password",
  //     required: "true",
  //     name: "password",
  //   },
  // ];

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const obj = {
      email: emailRef.current.value,
      password: passRef.current.value,
    };
    dispatch(loginAdmin(obj));
  };
  return (
    <>
      <div className="login-main p-5">
        <Row className="loginrow bg-white">
          <Col className="loginbg"></Col>
          <Col className=" d-flex flex-column justify-content-center rounded">
            <div className="loginformbackground">
              <div className="text-center ">Welcome to Admin CMS</div>
              <hr />
              <Form onSubmit={handleOnSubmit}>
                <div className="fields p-3">
                  <Form.Group>
                    <FloatingLabel label="Email" className="mb-2">
                      <Form.Control
                        ref={emailRef}
                        placeholder="Roshan@gmail.com"
                        type="email"
                        required="true"
                        name="email"
                      ></Form.Control>
                    </FloatingLabel>
                    <FloatingLabel label="Password" className="mb-2">
                      <Form.Control
                        ref={passRef}
                        placeholder="Roshan@gmail.com"
                        type="password"
                        required="true"
                        name="password"
                      ></Form.Control>
                    </FloatingLabel>
                  </Form.Group>
                </div>

                <div className="text-end mt-2">
                  <Link> forgot password?</Link>
                </div>
                <div className=" d-flex justify-content-center align-items-center mt-3">
                  <Button variant="info" type="submit">
                    Login
                  </Button>
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
