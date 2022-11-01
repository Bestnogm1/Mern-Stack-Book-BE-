import mongoose from "mongoose";
const Schema = mongoose.Schema;
const reviewsSchema = new Schema(
  {
    reviews: String,
    ownedBy: { type: mongoose.Schema.Types.ObjectId, ref: "Profile" },
    bookId: String,
  },
  {
    timestamps: true,
  }
);

const Reviews = mongoose.model("Reviews", reviewsSchema);

export { Reviews };
