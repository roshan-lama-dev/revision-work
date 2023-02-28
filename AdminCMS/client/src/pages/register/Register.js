import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { CustomForm } from "../../customComponents/CustomForm";
import { registerNewAdmin } from "../../helper/axisoHelper";
import Footer from "../layout/Footer";

const Register = () => {
  const [registerDetails, setRegisterDetails] = useState({});
  const loginFields = [
    {
      label: "First Name",
      placeholder: "Roshan",
      type: "text",
      required: "true",
      name: "fName",
    },
    {
      label: "Last Name",
      placeholder: "Lama",
      type: "text",
      required: "true",
      name: "lName",
    },
    {
      label: "Email",
      placeholder: "Roshan@gmail.com",
      type: "email",
      required: "true",
      name: "email",
    },
    {
      label: "Phone Number",
      placeholder: "04********",
      type: "number",
      required: "true",
      name: "phone",
    },
    {
      label: "Address",
      placeholder: "25 Someplace Somewhere",
      type: "text",
      required: "true",
      name: "address",
    },
    {
      label: "Password",
      placeholder: "********",
      type: "password",
      required: "true",
      name: "password",
    },
    {
      label: "Confirm Password",
      placeholder: "********",
      type: "password",
      required: "true",
      name: "confirmPassword",
    },
  ];

  const handelOnSubmit = async (e) => {
    e.preventDefault();
    const { status, message } = await registerNewAdmin(registerDetails);
    console.log(status, message);
    toast[status](message);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setRegisterDetails({
      ...registerDetails,
      [name]: value,
    });
  };
  return (
    <>
      <div className="login-main p-5">
        <Row className="loginrow bg-white">
          <Col className="loginbg"></Col>
          <Col className=" d-flex flex-column justify-content-center rounded">
            <div className="loginformbackground">
              <div className="text-center mt-3 ">Welcome to Admin CMS</div>
              <hr />
              <Form onSubmit={handelOnSubmit}>
                <div className="fields p-3">
                  {loginFields.map((item, index) => {
                    return (
                      <CustomForm
                        key={item._id}
                        {...item}
                        onChange={handleOnChange}
                      />
                    );
                  })}
                </div>

                <div className="text-end mt-2">
                  <Link> forgot password?</Link>
                </div>
                <div className=" d-flex justify-content-center align-items-center mt-3">
                  <Button type="submit" variant="info ">
                    Register
                  </Button>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <hr />
                  <span>or</span>
                  <hr />
                </div>
                <div className="d-flex justify-content-center">
                  <p>
                    {" "}
                    <span>
                      {" "}
                      <Link to="/">Already have an account?</Link>{" "}
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

export default Register;
