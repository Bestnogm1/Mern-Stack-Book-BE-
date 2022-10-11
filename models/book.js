import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: String,
    authors: [String],
    title: String,
    authors: [String],
    bookId: String,
    cover: String,
    publishDate: String,
    rating: Number,
    description: String,
    googleURL: String,
  },
  {
    timestamps: true,
  }
);

const Books = mongoose.model("Books", bookSchema);

export { Books };
