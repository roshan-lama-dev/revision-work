import React from "react";
import { Form } from "react-bootstrap";

const CustomInput = ({ label, ...rest }) => {
  return (
    <div>
      <Form.Group>
        <Form.Label>{label}</Form.Label>
        <Form.Control {...rest}></Form.Control>
      </Form.Group>
    </div>
  );
};

export default CustomInput;
