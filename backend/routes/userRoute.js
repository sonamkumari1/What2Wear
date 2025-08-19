import express from "express";
import { getUserProfile, login, logoutUser, register } from "../controllers/userController.js";
import { isAuthenticated } from "../middleware/auth.js";

const userRoute = express.Router();

userRoute.post("/register", register);
userRoute.post("/login", login);
userRoute.get("/logout", logoutUser);
userRoute.get("/profile", isAuthenticated, getUserProfile);

export default userRoute;
