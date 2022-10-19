import "dotenv/config.js";
import express from "express";
import logger from "morgan";
import cors from "cors";

import { router as profilesRouter } from "./routes/profiles.js";
import { router as authRouter } from "./routes/auth.js";
import { router as booksRouter } from "./routes/books.js";

import("./config/database.js");

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());

app.use("/api/profiles", profilesRouter);
app.use("/api/auth", authRouter);
app.use("/api/books", booksRouter);

app.use(function (req, res, next) {
  res.status(404).json({ err: "Not found" });
});
app.get("/testing", (req, res, next) => {
  console.log("hello");
  // res.status(200).json({ te: "wow" });
});
app.use(function (err, req, res, next) {
  res.status(err.status || 500).json({ err: err.message });
});

export { app };
