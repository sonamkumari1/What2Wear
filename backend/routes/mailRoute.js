import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/send", async (req, res) => {
  const { firstName, lastName, email, subscribe } = req.body;

  try {
    // Setup transporter (Gmail + App Password)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // from .env
        pass: process.env.EMAIL_PASS, // from .env (App Password)
      },
    });

    // Mail options
    const mailOptions = {
      from: `"MyWardrobe Newsletter" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thanks for Subscribing!",
      text: `Hi ${firstName},\n\nThanks for subscribing to our Newsletter! ✅\n\nSubscribe: ${subscribe ? "Yes" : "No"}\n\n- MyWardrobe Team`,
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
