import { createError } from "../../helpers/index.js";
import { deleteProduct } from "../../services/productsServices.js";

const removeProduct = async (req, res) => {
  const { id: _id } = req.params;
  const result = await deleteProduct(id);
  res.json({ message: "Remove product success" });
  if (!result) {
    throw createError(404, `Product with ${id} not found`);
  }
};

export default removeProduct;
