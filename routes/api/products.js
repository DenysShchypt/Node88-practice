import express from "express";
import { isValidId, validateBody } from "../../middlewares/validate/index.js";
import { ctrlWrapper } from "../../decorators/index.js";
import {
  addProduct,
  getAllProducts,
  getByIdProduct,
  removeProduct,
  updateProduct,
  updateSale,
} from "../../controllers/productsControllers/index.js";
import {
  addProductsSchema,
  updateProductsSchema,
  updateSaleSchema,
} from "../../models/productSchema.js";

const router = express.Router();
// отримання всіх товарів
router.get("/", ctrlWrapper(getAllProducts));
// Запит товару за ID
router.get("/:id", isValidId, ctrlWrapper(getByIdProduct));
// додавання товару
router.post("/", validateBody(addProductsSchema), ctrlWrapper(addProduct));
// Pедагування товару
router.put(
  "/:id",
  isValidId,
  validateBody(updateProductsSchema),
  ctrlWrapper(updateProduct)
);
router.patch(
  "/:id",
  isValidId,
  validateBody(updateSaleSchema),
  ctrlWrapper(updateSale)
);
// Видалення товару
router.delete("/:id", isValidId, ctrlWrapper(removeProduct));

export default router;
