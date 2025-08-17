import User from "../models/userModels.js";
import bcrypt from "bcrypt";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  // to hash the password
  const hashedPassword = await bcrypt.hashSync(password, 10);

  const newUser = new User({ username, email, password: hashedPassword });

  try {
    // Save the user to the database
    await newUser.save();
    res.status(201).json({
      message: "user created successfully",
    });
  } catch (error) {
    next(errorHandler(550, "error from function"));
  }
};
