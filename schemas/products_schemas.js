import Joi from "joi";

export const addProductsSchema = Joi.object({
  name: Joi.string().required().min(3),
  price: Joi.number().required().min(1),
});

export const updateProductsSchema = Joi.object({
  name: Joi.string().min(3),
  price: Joi.number().min(1),
  sale:Joi.number().min(0)
});

