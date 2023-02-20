import express from "express";
import { getBook, postBook } from "../models/bookModels/BookModel.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const result = await postBook(req.body);
    result?._id
      ? res.json({
          status: "success",
          message: "New Books has been added",
        })
      : res.json({
          status: "error",
          message: "Cannot add book",
        });
  } catch (error) {
    if (error.message.includes("E11000 duplicate key error collection")) {
      res.json({
        status: "error",
        message: "Please enter new book details",
      });
    }
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const result = await getBook();
    res.json(result);
  } catch (error) {
    next(error);
  }
});

export default router;
