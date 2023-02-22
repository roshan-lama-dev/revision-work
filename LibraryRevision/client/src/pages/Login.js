import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CustomInput from "../customInput/CustomInput";
import { MainLayout } from "../customLayout/MainLayout";
import { loginUser } from "../helpers/axiosHelper";

export const Login = () => {
  const navigate = useNavigate();
  const loginFields = [
    {
      label: "Email",
      placeholder: "Roshan@gmail.com",
      type: "email",
      name: "email",
      required: "true",
    },
    {
      label: "Password",
      placeholder: "*****",
      type: "password",
      name: "password",
      required: "true",
    },
  ];

  const [loginObj, setLoginObj] = useState({});
  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { status, message, result } = await loginUser(loginObj);

    if (status === "success") {
      toast[status](message);
      sessionStorage.setItem("user", JSON.stringify(result));
      navigate("/books");
    }
  };

  const handleOnChange = (e) => {
    const { value, name } = e.target;

    setLoginObj({
      ...loginObj,
      [name]: value,
    });
  };
  return (
    <MainLayout>
      <Container>
        <div className="p-5">
          <Row>
            <Col md="6" className="md-12">
              <div className="loginback rounded-5 d-flex flex-column justify-content-center align-items-center">
                <h1 className="bg-grey opacity-105 text-black rounded-3 ">
                  Login to the library system
                </h1>
              </div>
            </Col>
            <Col md="6" className="md">
              {" "}
              <Form onSubmit={handleOnSubmit}>
                <h1 className="text-end">Login</h1>
                <hr />
                <div className="mt-4">
                  {loginFields.map((item, index) => (
                    <CustomInput
                      {...item}
                      key={index}
                      onChange={handleOnChange}
                    />
                  ))}
                  <Button className="mt-3" type="submit">
                    Login
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </div>
      </Container>
    </MainLayout>
  );
};
