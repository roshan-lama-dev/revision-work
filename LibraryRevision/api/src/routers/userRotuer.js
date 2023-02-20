import express from "express";
import { createUser } from "../models/UserModel.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
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
    next(error);
  }
});

export default router;
