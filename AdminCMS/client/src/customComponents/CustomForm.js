import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";

export const CustomForm = ({ label, ...rest }) => {
  return (
    <Form.Group>
      <FloatingLabel label={label} className="mb-2">
        <Form.Control {...rest}></Form.Control>
      </FloatingLabel>
    </Form.Group>
  );
};
