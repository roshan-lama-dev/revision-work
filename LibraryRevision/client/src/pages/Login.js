import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
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
        <Form onSubmit={handleOnSubmit}>
          {loginFields.map((item, index) => (
            <CustomInput {...item} key={index} onChange={handleOnChange} />
          ))}

          <Button className="mt-3" type="submit">
            Login
          </Button>
        </Form>
      </Container>
    </MainLayout>
  );
};
