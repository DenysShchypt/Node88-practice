import express from "express";
import { ctrlWrapper } from "../../decorators/index.js";

import * as authControllers from "../../controllers/authControllers/index.js";
import validateBody from "../../middlewares/validate/validateBody.js";
import { addUserSchema } from "../../models/userSchema.js";

const router = express.Router();

router.post(
  "/singup",
  validateBody(addUserSchema),
  ctrlWrapper(authControllers.addUser)
);

export default router;
