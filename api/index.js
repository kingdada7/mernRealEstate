import express from "express";

import mongoose from "mongoose";

import dotenv from "dotenv";

import userRouter from "./routes/userroute.js";

dotenv.config();

mongoose
  .connect(process.env.mongoDb_URL)
  .then(() => {
    console.log("MongoDB connected successfully!!!");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000!!!");
});

app.use("/api/user", userRouter);
