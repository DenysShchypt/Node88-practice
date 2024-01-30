import { createError, sendMail } from "../../helpers/index.js";
import { User } from "../../models/userSchema.js";
import jwt from "jsonwebtoken";
import "dotenv/config";

const { FORGOT_PASSWORD_SECRET, FRONT_BASE_URL } = process.env;

const forgotPassword = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    throw createError(404, "User not found");
  }
  const token = jwt.sign({ id: user._id }, FORGOT_PASSWORD_SECRET, {
    expiresIn: "1h",
  });
  const sendMailOptions = {
    to: email,
    subject: "forgot password",
    html: `<a target = "_blank" href = "${FRONT_BASE_URL}/pages/forgot-password-form.html?token=${token}">Click for recovery your password</a>`,
  };
  sendMail(sendMailOptions);

  res.json({ message: "Check your email for password recovery" });
};

export default forgotPassword;
