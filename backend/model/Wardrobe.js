import mongoose from "mongoose";

const wardrobeSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    outfits: [{ type: mongoose.Schema.Types.ObjectId, ref: "Outfit" }], // multiple outfits
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model("Wardrobe", wardrobeSchema);
