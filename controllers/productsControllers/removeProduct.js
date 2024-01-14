import { createError } from "../../helpers/index.js";
import { Product } from "../../models/productSchema.js";

const removeProduct = async (req, res) => {
  const { id: _id } = req.params;
  const result = await Product.findByIdAndDelete(_id);
  if (!result) {
    throw createError(404, `Product with ${id} not found`);
  }
  res.json({ message: "Remove product success" });
};

export default removeProduct;
