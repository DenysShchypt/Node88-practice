import express from "express";
import { isValidId, validateProducts,} from "../../middlewares/validate/index.js";
import { ctrlWrapper } from "../../decorators/index.js";
import { addProduct, getAllProducts, getByIdProduct, removeProduct, updateProduct } from "../../controllers/productsControllers/index.js";
import { addProductsSchema, updateProductsSchema } from "../../controllers/models/productSchema.js";

const router = express.Router();
// отримання всіх товарів
router.get("/", ctrlWrapper(getAllProducts));
// Запит товару за ID
router.get("/:id",isValidId, ctrlWrapper(getByIdProduct))
// додавання товару
router.post("/", validateProducts(addProductsSchema), ctrlWrapper(addProduct));
// Pедагування товару
router.put("/:id",isValidId, validateProducts(updateProductsSchema), ctrlWrapper(updateProduct));
// Видалення товару
router.delete("/:id",isValidId, ctrlWrapper(removeProduct));

export default router;
