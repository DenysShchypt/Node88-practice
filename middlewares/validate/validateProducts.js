import Joi from "joi";
import { createError } from "../../helpers/createError.js";

const addProductsSchema = Joi.object({
  name: Joi.string().required().min(3),
  price: Joi.number().required().min(1),
});

export const validateAddProduct = async (req, res, next) => {
  try {
    const product = req.body;

    const { error } = addProductsSchema.validate(product);

    if (error) {
      throw createError(400, error.message);
    }

    next();
  } catch (error) {
    next(error);
  }
};
