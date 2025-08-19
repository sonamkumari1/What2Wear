import {
  uploadMedia,
  deleteMediaFromCloudinary,
} from "../config/cloudinary.js";
import Outfit from "../model/outfit.js";
import User from "../model/user.js"; // 👈 you missed this import

// ADD outfit
export const addOutfit = async (req, res) => {
  try {
    const { category, gender, item } = req.body;
    const photo = req.file;

    if (!category || !gender || !item || !photo) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    // Upload image to Cloudinary
    const uploadedPhoto = await uploadMedia(photo.path);

    const newOutfit = new Outfit({
      category,
      gender,
      item,
      photo: uploadedPhoto.secure_url,
      publicId: uploadedPhoto.public_id,
      user: req.user._id, // 👈 comes from authMiddleware
    });

    await newOutfit.save();

    // Push outfit to user's outfits

    res.json({
      success: true,
      message: "Outfit added successfully",
      outfit: newOutfit,
    });
  } catch (error) {
    console.error("Add outfit error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET all outfits of logged-in user
export const getAllOutfit = async (req, res) => {
  try {
    const outfits = await Outfit.find({ user: req.user.id });
    res.json({ success: true, outfits });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// UPDATE outfit
export const updateOutfit = async (req, res) => {
  try {
    const { category, gender, item } = req.body;
    const outfit = await Outfit.findById(req.params.id);

    if (!outfit)
      return res
        .status(404)
        .json({ success: false, message: "Outfit not found" });

    if (outfit.user.toString() !== req.user.id) {
      return res
        .status(403)
        .json({ success: false, message: "Not authorized" });
    }

    if (req.file) {
      if (outfit.publicId) await deleteMediaFromCloudinary(outfit.publicId);
      const uploadedPhoto = await uploadMedia(req.file.path);
      outfit.photo = uploadedPhoto.secure_url;
      outfit.publicId = uploadedPhoto.public_id;
    }

    if (category) outfit.category = category;
    if (gender) outfit.gender = gender;
    if (item) outfit.item = item;

    await outfit.save();
    res.json({ success: true, message: "Outfit updated", outfit });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// DELETE outfit
export const deleteOutfit = async (req, res) => {
  try {
    const outfit = await Outfit.findById(req.params.id);
    if (!outfit)
      return res
        .status(404)
        .json({ success: false, message: "Outfit not found" });

    if (outfit.user.toString() !== req.user.id) {
      return res
        .status(403)
        .json({ success: false, message: "Not authorized" });
    }

    if (outfit.publicId) await deleteMediaFromCloudinary(outfit.publicId);

    await outfit.deleteOne();
    res.json({ success: true, message: "Outfit deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
