import express from "express";
import {
  addProduct,
  getAllProducts,
} from "../../controllers/productsControllers.js";
import { validateAddProduct } from "../../middlewares/validate/validateProducts.js";

const router = express.Router();

router.get("/", getAllProducts);
router.post("/", validateAddProduct, addProduct);

export default router;
