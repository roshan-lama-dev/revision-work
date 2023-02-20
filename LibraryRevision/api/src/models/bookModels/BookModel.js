import BookSchema from "./BookSchema.js";

export const postBook = (bookObj) => {
  return BookSchema(bookObj).save();
};

export const getBook = () => {
  return BookSchema.find();
};
