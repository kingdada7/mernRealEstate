import express from "express";
import { signup } from "../controller/authcontroller.js";
import { signin } from "../controller/authcontroller.js";

// import { test } from "../controller/usercontroller.js";

const authrouter = express.Router();

authrouter.post("/signup", signup);
authrouter.post("/signin", signin);

export default authrouter;
