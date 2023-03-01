import React, { useState } from "react";
import { Alert, Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { CustomForm } from "../../customComponents/CustomForm";
import { registerNewAdmin } from "../../helper/axisoHelper";
import Footer from "../layout/Footer";

const Register = () => {
  const [registerDetails, setRegisterDetails] = useState({});
  //this is for the response
  const [response, setResponse] = useState({});
  // this is for the spinner
  const [isLoading, setIsLoading] = useState(false);
  // this for the erro
  const [err, setErr] = useState("");
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

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setErr("");

    // regex checking for the password
    if (name === "password") {
      value.length < 6 && setErr("Password must be atleaset 6 character long");
      !/[0-9]/.test(value) &&
        setErr("At least one number must be included in the password");
      !/[a-z]/.test(value) &&
        setErr("At least one letter must be lowercase in the password");
      !/[A-Z]/.test(value) &&
        setErr("At least one letter must be uppercase in the password");
    }
    setRegisterDetails({
      ...registerDetails,
      [name]: value,
    });
  };

  const handelOnSubmit = async (e) => {
    e.preventDefault();

    const { confirmPassword, ...rest } = registerDetails;
    if (confirmPassword !== rest.password) {
      return toast.error("Password does not match");
    }
    setIsLoading(true);
    const result = await registerNewAdmin(rest);
    if (result) {
      setResponse(result);
      setIsLoading(false);
    } else toast.error("Api call unsuccessful");
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
                  <div className="text-center">
                    {isLoading && <Spinner></Spinner>}
                  </div>

                  {response.message && (
                    <Alert
                      variant={
                        response.status === "success" ? "success" : "danger"
                      }
                    >
                      <div className="customisedMsg">{response.message}</div>
                    </Alert>
                  )}
                  {loginFields.map((item, index) => {
                    return (
                      <CustomForm
                        key={item._id}
                        {...item}
                        onChange={handleOnChange}
                      />
                    );
                  })}

                  {err && <div className="text-danger ">{err} </div>}
                </div>

                <div className="text-end mt-2">
                  <Link> forgot password?</Link>
                </div>
                <div className=" d-flex justify-content-center align-items-center mt-3">
                  <Button type="submit" variant="info " disabled={err}>
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
