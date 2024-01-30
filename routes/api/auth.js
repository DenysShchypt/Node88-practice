import express from "express";
import { ctrlWrapper } from "../../decorators/index.js";

import * as authControllers from "../../controllers/authControllers/index.js";
import validateBody from "../../middlewares/validate/validateBody.js";
import { addUserSchema, loginUserSchema } from "../../models/userSchema.js";

const router = express.Router();

router.post(
  "/signup",
  validateBody(addUserSchema),
  ctrlWrapper(authControllers.addUser)
);
router.post(
  "/login",
  validateBody(loginUserSchema),
  ctrlWrapper(authControllers.loginUser)
);

export default router;
