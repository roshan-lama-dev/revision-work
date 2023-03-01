import React, { useEffect, useRef, useState } from "react";
import { Alert, Spinner } from "react-bootstrap";
import AdminLayout from "../layout/AdminLayout";
import { useSearchParams } from "react-router-dom";
import { verifyAdminUser } from "../../helper/axisoHelper";
export const EmailVerify = () => {
  const isExecuteRef = useRef(true);
  const [searchParams] = useSearchParams();
  const [response, setResponse] = useState({});

  useEffect(() => {
    const dt = {
      verificationCode: searchParams.get("c"),
      email: searchParams.get("email"),
    };

    verifyUserLink(dt);
    isExecuteRef.current = false;
  }, []);

  // call apis here

  const verifyUserLink = async (linkData) => {
    // call Axios
    if (!isExecuteRef.current) {
      return console.log("APi already called");
    }

    const data = await verifyAdminUser(linkData);
    console.log(data);
    setResponse(data);
  };

  // console.log(verificationCode, email);
  return (
    <AdminLayout>
      <div className="verfiyPage d-flex justify-content-center align-items-center">
        <div className="">
          {response.message ? (
            <Alert
              variant={response.status === "success" ? "success" : "danger"}
            >
              {response.message}
            </Alert>
          ) : (
            <Spinner variant="primary" animation="border"></Spinner>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};
