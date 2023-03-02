import express from "express";
import {
  findAdminAndUpdate,
  getTheUser,
  postUser,
} from "../models/adminUser/AdminUserModel.js";
import { v4 as uuidv4 } from "uuid";
import { checkPassword, hashPassword } from "../utils/bcrypt.js";
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
// email verifiaction
router.post("/verify-email", async (req, res, next) => {
  try {
    console.log(req.body);
    const updateObj = {
      status: "active",
      isEmailVerfied: true,
      verificationCode: "",
    };
    const result = await findAdminAndUpdate(req.body, updateObj);

    if (result?._id) {
      res.json({
        status: "success",
        message: "Your email has been verified. You can login now",
      });

      // send email confirmation as well
      return;
    }
    res.json({
      status: "error",
      message: "Invalid Link",
    });
  } catch (error) {
    next(error);
  }
});

// login user

// call back function

router.post("/login", async (req, res, next) => {
  try {
    // first check the email matches or not. we will do the password seperately or not since it is hashed
    const { email, password } = req.body;

    const result = await getTheUser({ email });
    // check thhe status of the use
    if (result?.status === "inactive") {
      return res.json({
        status: "error",
        message: "Please verift and acitvate your email first ",
      });
    }

    if (result?._id) {
      const isPasswordMatched = checkPassword(password, result?.password);

      if (isPasswordMatched) {
        result.password = undefined;
        result.__v = undefined;

        // rule of json is . it doesnot return the undefined value
        return res.json({
          status: "success",
          message: "Login is Successfull",
          result,
        });
      }

      res.json({
        status: "error",
        message: "Cannot login. Please check your credentials",
      });
    }
    res.json({
      status: "error",
      message: "Invalid login credentials",
    });
  } catch (error) {
    next(error);
  }
});

export default router;
