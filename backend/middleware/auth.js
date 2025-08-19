import jwt from "jsonwebtoken";
import User from "../model/user.js";

export const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Please login to access this resource" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ message: "Invalid token" });
    }

    // ✅ Fetch user and attach to req
    const user = await User.findById(decoded.userId).select("_id name");
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = user; // ✅ Attach user to req
     console.log("Authenticated User:", req.user); // 🔍 Debug log

    next();
  } catch (error) {
    console.error("Error in isAuthenticated:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
