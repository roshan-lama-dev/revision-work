import express from "express";
import { postUser } from "../models/adminUser/AdminUserModel";
import { v4 as uuidv4 } from "uuid";
import { hashPassword } from "../utils/bcrypt";
import { adminSignUpEmailVerification } from "../utils/email";
uuidv4();
const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
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

    // if(error.message.includes("E"))
    next(error);
  }
});

export default router;
