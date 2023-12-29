import express from "express";
import { validateProducts } from "../../middlewares/validate/index.js";
import { addProductsSchema, updateProductsSchema } from "../../schemas/products_schemas.js";
import { ctrlWrapper } from "../../decorators/index.js";
import { addProduct, getAllProducts, getByIdProduct, removeProduct, updateProduct } from "../../controllers/productsControllers/index.js";

const router = express.Router();
// отримання всіх товарів
router.get("/", ctrlWrapper(getAllProducts));
// Запит товару за ID
router.get("/:id", ctrlWrapper(getByIdProduct))
// додавання товару
router.post("/", validateProducts(addProductsSchema), ctrlWrapper(addProduct));
// Pедагування товару
router.put("/:id", validateProducts(updateProductsSchema), ctrlWrapper(updateProduct));
// Видалення товару
router.delete("/:id", ctrlWrapper(removeProduct));

export default router;
