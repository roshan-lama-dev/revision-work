import express from "express";
import {
  deleteBooks,
  getBook,
  postBook,
} from "../models/bookModels/BookModel.js";

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

// get the books
router.get("/", async (req, res, next) => {
  try {
    const result = await getBook();
    res.json(result);
  } catch (error) {
    next(error);
  }
});

// delete a specific books

router.delete("/", async (req, res, next) => {
  try {
    const result = await deleteBooks(req.headers.authorization);
    console.log(result);
    result?._id
      ? res.json({
          status: "success",
          message: "The deletion is successful",
        })
      : res.json({
          status: "error",
          message: "Cannot delete the books. Please try again",
        });
  } catch (error) {
    next(error);
  }
});
export default router;
