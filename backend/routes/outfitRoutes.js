import express from "express";
import upload from "../config/multer.js";
import { addOutfit, deleteOutfit, getAllOutfit, updateOutfit } from "../controllers/outfitController.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

// must be logged in
router.post("/add", isAuthenticated, upload.single("photo"), addOutfit);
router.get("/", isAuthenticated, getAllOutfit);

router.put("/:id", isAuthenticated, upload.single("photo"), updateOutfit);
router.delete("/:id", isAuthenticated, deleteOutfit);

export default router;
