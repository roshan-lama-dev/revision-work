import { Button, TextField } from "@mui/material";
import React from "react";
import "./contact.scss";
export const Contact = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="shake" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleOnSubmit}>
          <TextField
            style={{
              marginTop: "10px",
              backgroundColor: "white",
              borderRadius: "15px",
              marginBottom: "10px",
            }}
            id="outlined-basic"
            label="Email"
            variant="filled"
          />

          <TextField
            style={{
              marginTop: "10px",
              backgroundColor: "white",
              borderRadius: "15px",
              marginBottom: "10px",
            }}
            id="outlined-basic"
            label="Message"
            variant="filled"
          />

          {/* <textarea placeholder="message"></textarea> */}
          <Button type="submit" variant="contained" color="success">
            Success
          </Button>
          {/* <button type="submit">Submit</button> */}
        </form>
      </div>
    </div>
  );
};
