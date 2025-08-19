import nodemailer from "nodemailer";

export const sendMail = async (req, res) => {
  const { firstName, lastName, email, subscribe } = req.body;

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "sonamkumari63928@gmail.com",
        pass: "ktat ycrb fqbn ibcr",
      },
    });

    await transporter.sendMail({
      from: '"MyWardrobe Newsletter" <sonamkumari63928@gmail.com>',
      to: email,
      subject: "Thanks for Subscribing!",
      text: `Hi ${firstName}, thanks for subscribing!`,
    });

    res.json({ success: true, message: "Email sent!" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
