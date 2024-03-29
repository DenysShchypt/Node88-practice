import { Product } from "../../models/productSchema.js";
import { createError } from "../../helpers/index.js";

const getByIdProduct = async (req, res) => {
  const { id } = req.params;
  const result = await Product.findById(id);
  if (!result) {
    throw createError(404, `Product with ${id} not found`);
  }
  res.json(result);
};

export default getByIdProduct;
