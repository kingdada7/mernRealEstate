import express from "express";
import { test } from "../controller/usercontroller.js";

const userRouter = express.Router();

userRouter.get("/test", test);
export default userRouter;
