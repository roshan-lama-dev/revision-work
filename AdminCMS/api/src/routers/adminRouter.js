import express from "express";
import { postUser } from "../models/adminUser/AdminUserModel.js";
import { v4 as uuidv4 } from "uuid";
import { hashPassword } from "../utils/bcrypt.js";
import { adminSignUpEmailVerification } from "../utils/email.js";
uuidv4();
const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    req.body.password = hashPassword(req.body.password);
    req.body.verificationCode = uuidv4();
    const result = await postUser(req.body);

    if (result?._id) {
      // we need to create unique URL and sent email to the client

      // process email
      const uniqueUrl = `http://localhost:3000/verify?c=${result.verificationCode}&email=${result.email}`;

      //   call email service
      adminSignUpEmailVerification(result, uniqueUrl);
      res.json({
        status: "success",
        message:
          "We have sent a verification email. Please verfiy your account to be able to use the system",
      });
    }

    res.json({
      status: "error",
      message: "Cannot register the user",
    });
  } catch (error) {
    error.errorCode = 500;

    if (error.message.includes("E11000 duplicate key error collection")) {
      {
        res.json({
          status: "error",
          message: "Please use another email",
        });
      }
    }
    next(error);
  }
});

export default router;
