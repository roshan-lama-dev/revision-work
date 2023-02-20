import express from "express";
import {
  comapreTHeHashedPassword,
  hashPassword,
} from "../bcrypt/encryption.js";
import { createUser, getUser } from "../models/UserModel.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    // const { password } = req.body;

    const hashedPassword = hashPassword(req.body.password);
    // const hashPassword = (password) => {};

    req.body.password = hashedPassword;
    const createUserResult = await createUser(req.body);

    createUserResult?._id
      ? res.json({
          status: "success",
          message: "The new user has been created",
        })
      : res.json({
          status: "error",
          message: "cannot create a new user",
        });
  } catch (error) {
    if (error.message.includes("E11000 duplicate key error collection")) {
      res.json({
        status: "error",
        message: "Please enter a different email",
      });
    }

    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    const result = await getUser({ email });
    console.log(result.password);
    if (result?._id) {
      const comparedPasswordResult = comapreTHeHashedPassword(
        password,
        result.password
      );
      console.log(comparedPasswordResult);
      if (comparedPasswordResult) {
        return res.json({
          status: "success",
          message: "Login is successfull",
          result,
        });
      } else {
        return res.json({
          status: "error",
          message: "Cannot login. Please check the login credentials",
        });
      }
    }
  } catch (error) {
    next(error);
  }
});
export default router;
