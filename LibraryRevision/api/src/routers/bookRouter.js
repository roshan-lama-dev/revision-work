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
    const result = await deleteBooks();
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

// borrow books
router.post("/borrow", async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    console.log(req.body.bookId);

    const user = await getUserById(authorization);
    const book = await getBookById(req.body.bookId);

    // check if the user and book exists in the database
    // if they do then use the book id and the user id to update the borrowed book
    if (user?._id && book?._id) {
      if (book?.borrowedBy.length) {
        res.json({
          status: "error",
          message: "Cannot borrow this book",
        });
      }

      const result = await borrowBooks(book?._id, {
        $push: {
          borrowedBy: user?._id,
        },
      });

      result?._id
        ? res.json({
            status: "success",
            message: `You have borrowed ${book.title}.`,
          })
        : res.json({
            status: "error",
            message: "Cannot borrow this book",
          });
    }
  } catch (error) {
    next(error);
  }
});
export default router;
