import { Button, TextField } from "@mui/material";
import React, { useRef } from "react";
import "./contact.scss";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
export const Contact = () => {
  const form = useRef();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_83s308j",
        "template_978n7wp",
        form.current,
        "qLP0I-Ge24HExNiHT"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") {
            toast.success("Email Sent");
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="shake" />
      </div>
      <motion.div
        className="right"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <h2>Contact</h2>
        <form ref={form} onSubmit={handleOnSubmit}>
          <TextField
            style={{
              marginTop: "10px",
              backgroundColor: "white",
              borderRadius: "15px",
              marginBottom: "10px",
            }}
            id="outlined-basic"
            label="Name"
            variant="filled"
            name="from_name"
          />

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
            type="email"
            name="from_email"
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
            name="message"
          />

          {/* <textarea placeholder="message"></textarea> */}
          <Button
            type="submit"
            variant="contained"
            color="success"
            value="send"
          >
            Submit
          </Button>
          {/* <button type="submit">Submit</button> */}
        </form>
      </motion.div>
    </div>
  );
};
