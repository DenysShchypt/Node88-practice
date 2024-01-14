import { createError } from "../../helpers/index.js";
import { Product } from "../../models/productSchema.js";

const updateProduct = async (req, res) => {
  const { id: _id } = req.params;
  const result = await Product.findByIdAndUpdate(_id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw createError(404, `Product with ${id} not found`);
  }
  res.json(result);
};

export default updateProduct;
