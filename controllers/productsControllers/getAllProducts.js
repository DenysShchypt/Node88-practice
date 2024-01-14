import { Product } from "../../models/productSchema.js";

const getAllProducts = async (req, res) => {
  const result = await Product.find();
  res.json(result);
};

export default getAllProducts;
