import { createError } from "../../helpers/index.js";
import { User } from "../../models/userSchema.js";

import bcrypt from "bcrypt";

const addUser = async (req, res) => {
  const { password, email } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    throw createError(409, "email in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const result = await User.create({ ...req.body, password: hashPassword });

  res.status(201).json({
    _id: result._id,
    email: result.email,
  });
};

export default addUser;
