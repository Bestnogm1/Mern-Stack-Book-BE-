import mongoose from "mongoose";
const Schema = mongoose.Schema;
const bookSchema = new Schema(
  {
    title: String,
    authors: [String],
    bookId: String,
    cover: String,
    publishedDate: String,
    description: String,
    googleURL: String,
    ownedBy: { type: mongoose.Schema.Types.ObjectId, ref: "Profile" },
  },
  {
    timestamps: true,
  }
);

const Books = mongoose.model("Books", bookSchema);

export { Books };
