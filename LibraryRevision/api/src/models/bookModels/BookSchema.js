import mongoose from "mongoose";
const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    isbn: {
      type: String,
      required: true,
      unique: true,
    },
    published: {
      type: String,
      required: true,
    },
    borrowedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
  },
  { timestamps: true }
);

export default mongoose.model("book", bookSchema);
