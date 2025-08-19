import User from "../model/user.js";
import Wardrobe from "../model/Wardrobe.js";

export const saveWardrobe = async (req, res) => {
  try {
    const { outfits } = req.body; // array of outfit IDs

    if (!outfits || outfits.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "No outfits selected" });
    }

    const wardrobe = new Wardrobe({
      user: req.user._id, // 👈 from auth middleware
      outfits,
    });

    const savedWardrobe = await wardrobe.save();

    // Optional: also link wardrobe to user
    await User.findByIdAndUpdate(req.user._id, {
      $push: { wardrobes: savedWardrobe._id },
    });

    res.json({
      success: true,
      message: "Wardrobe saved successfully",
      wardrobe: savedWardrobe,
    });
  } catch (error) {
    console.error("Save wardrobe error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllWardrobeOutfits = async (req, res) => {
  try {
    const wardrobes = await Wardrobe.find({})
      .populate("user", "name email") // fetch user details (only name & email)
      .populate("outfits"); // fetch outfit details

    res.json({
      success: true,
      message: "All wardrobes fetched successfully",
      wardrobes,
    });
  } catch (error) {
    console.error("Get wardrobe error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteWardrobe = async (req, res) => {
  try {
    const { id } = req.params; // wardrobe ID

    const wardrobe = await Wardrobe.findById(id);
    if (!wardrobe) {
      return res.status(404).json({ success: false, message: "Wardrobe not found" });
    }

    // Ensure only owner can delete
    if (wardrobe.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ success: false, message: "Not authorized" });
    }

    await Wardrobe.findByIdAndDelete(id);

    // Remove from user.wardrobes array
    await User.findByIdAndUpdate(req.user._id, {
      $pull: { wardrobes: id },
    });

    res.json({ success: true, message: "Wardrobe deleted successfully" });
  } catch (error) {
    console.error("Delete wardrobe error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};
