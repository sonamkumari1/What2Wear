import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  photoUrl: {
    type: String,
    default: "https://github.com/shadcn.png",
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    required: true,
  },
   outfits: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Outfit",
    },
  ],
  wardrobes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Wardrobe" }]
});

const User = mongoose.model("User", userSchema);

export default User;
