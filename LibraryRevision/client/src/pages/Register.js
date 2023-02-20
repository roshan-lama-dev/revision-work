import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import CustomInput from "../customInput/CustomInput";
import { MainLayout } from "../customLayout/MainLayout";
import { createNewUser } from "../helpers/axiosHelper";
export const Register = () => {
  const [userObject, setUserObject] = useState({});
  const inputFields = [
    {
      label: "First Name",
      placeholder: "Roshan",
      required: "true",
      type: "text",
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
      label: "Password",
      placeholder: "*******",
      type: "password",
      required: "true",
      name: "password",
    },
    {
      label: "Confirm Password",
      placeholder: "******",
      required: "true",
      type: "password",
      name: "confirmPassword",
    },
  ];

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (userObject.password !== userObject.confirmPassword) {
      return toast.error("Please check the password");
    } else {
      const { status, message } = await createNewUser(userObject);

      toast[status](message);
    }
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUserObject({
      ...userObject,
      [name]: value,
    });
  };
  return (
    <MainLayout>
      <Container>
        <Row>
          <Col>Hello World</Col>
          <Col>
            <Form onSubmit={handleOnSubmit}>
              {inputFields.map((item, index) => (
                <CustomInput {...item} key={index} onChange={handleOnChange} />
              ))}

              <label className="mt-3" htmlFor="role">
                Role
              </label>
              <Form.Select
                onChange={handleOnChange}
                id="role"
                required="true"
                name="role"

                // label=
              >
                <option value={""}>Please select the role</option>
                <option value={"teacher"}>Teacher</option>
                <option value={"student"}>Student</option>
              </Form.Select>

              <Button type="submit" className="mt-3">
                Register
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
};
