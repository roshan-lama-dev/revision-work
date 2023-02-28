import React from "react";
import { Alert } from "react-bootstrap";
import AdminLayout from "../layout/AdminLayout";

export const EmailVerify = () => {
  return (
    <AdminLayout>
      <div className="verfiyPage">
        <div className="d-flex justify-content-center align-items-center">
          <Alert variant="success">Email verification is in process</Alert>
        </div>
      </div>
    </AdminLayout>
  );
};
