import express from "express";
import { deleteWardrobe, getAllWardrobeOutfits, saveWardrobe } from "../controllers/wardrobeController.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

router.post("/save", isAuthenticated, saveWardrobe);
router.get("/all", isAuthenticated, getAllWardrobeOutfits)
router.delete("/:id", isAuthenticated, deleteWardrobe);

export default router;
