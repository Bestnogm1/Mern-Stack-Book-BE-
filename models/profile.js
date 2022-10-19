import mongoose from "mongoose";
const Schema = mongoose.Schema;

const profileSchema = new Schema(
  {
    email: { type: String, required: true, lowercase: true, unique: true },
    name: String,
    bookshelf: [{ type: Schema.Types.ObjectId, ref: "Books" }],
  },
  {
    timestamps: true,
  }
);

const Profile = mongoose.model("Profile", profileSchema);

export { Profile };
