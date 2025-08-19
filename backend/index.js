import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/mongodb.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import outfitRoutes from "./routes/outfitRoutes.js";
import wardrobeRoutes from "./routes/wardrobeRoutes.js";
import mailRoute from "./routes/mailRoute.js";
import path from "path";

dotenv.config();

const app = express();

const __dirname=path.resolve()
// ✅ Correct CORS setup for React (http://localhost:5173)
app.use(cors({
  origin: "https://what2wear-bsr8.onrender.com",
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/user', userRoute);
app.use("/api/outfits", outfitRoutes);
app.use("/api/wardrobe", wardrobeRoutes);
app.use("/api/mail", mailRoute); 

app.use(express.static(path.join(__dirname, "/frontend/dist")))
// app.get('/*', (_,res)=>{
// res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"))
// })
 app.get(/.*/, (req, res) => { res.sendFile(path.resolve(__dirname, "frontend","dist", "index.html")); });

const PORT = 3000;

app.listen(PORT, () => {
  connectDB();
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
