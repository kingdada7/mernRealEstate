import express from "express";

import mongoose from "mongoose";

import dotenv from "dotenv";

import userRouter from "./routes/userroute.js";
import authrouter from "./routes/authroute.js"; 

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

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}!!!`);
});

app.use("/api/user", userRouter);
app.use("/api/auth", authrouter);
 