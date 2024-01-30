import jwt from "jsonwebtoken";
import "dotenv/config";
import { createError } from "../../helpers/index.js";

const { FORGOT_PASSWORD_SECRET, FRONT_BASE_URL } = process.env;

const recoveryPassword = async (req, res) => {
  const { authorization: token } = req.headers;

  const tokenPayload = jwt.verify(token, FORGOT_PASSWORD_SECRET);

  if (!tokenPayload) {
    throw createError(403, "Invalid token");
  }
  console.log("password successful changed");

  res.redirect(`${FRONT_BASE_URL}/pages`);
};

export default recoveryPassword;
