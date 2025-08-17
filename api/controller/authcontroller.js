import User from "../models/userModels.js";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
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
    res.status(500).json({ message: "Error creating user", error });
  }
};
