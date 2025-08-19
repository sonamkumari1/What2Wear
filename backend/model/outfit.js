import mongoose from "mongoose";

const outfitSchema = new mongoose.Schema({
  category: { type: String, required: true },
  gender: { type: String, required: true },
  item: { type: String, required: true },
  photo: { type: String, required: true },
  publicId: { type: String, required: true },
   user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Outfit = mongoose.model("Outfit", outfitSchema);
export default Outfit;
