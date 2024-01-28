import { Schema, model, version } from "mongoose";
import Joi from "joi";
import { handleMongoos } from "../helpers/index.js";

const emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;

//MONGOOSE
const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: [true, "Set name for user"],
      //   unique: false,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    token: String,
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

//JOI
export const addUserSchema = Joi.object({
  userName: Joi.string().required(),
  email: Joi.string().required().pattern(emailRegExp),
  password: Joi.string().required(),
});

userSchema.post("save", handleMongoos);

export const User = model("user", userSchema);
