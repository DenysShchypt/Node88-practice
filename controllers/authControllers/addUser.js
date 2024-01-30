import { createError, sendMail } from "../../helpers/index.js";
import { User } from "../../models/userSchema.js";
import { nanoid } from "nanoid";
import bcrypt from "bcrypt";

const { BASE_URL } = process.env;

const addUser = async (req, res) => {
  const { password, email } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    throw createError(409, "email in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const verificationToken = nanoid();
  const result = await User.create({
    ...req.body,
    password: hashPassword,
    verificationToken,
  });

  const verifyEmail = {
    to: email,
    subject: "verify email",
    html: `<a target = "_blank" href = "${BASE_URL}/api/auth/verify/${verificationToken}">Click for verify email</a>`,
  };

  await sendMail(verifyEmail);

  res.status(201).json({
    _id: result._id,
    email: result.email,
  });
};

export default addUser;
