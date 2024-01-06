import { Product } from "../models/productSchema.js";

const addProduct = async (req, res) => {
  const newProduct = Product.create(...req.body);
  res.status(201).json(newProduct);
};

export default addProduct;
