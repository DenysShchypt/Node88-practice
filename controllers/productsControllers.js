import * as s from "../services/productsServices.js";

const getAllProducts = async (req, res, next) => {
  try {
    const result = await s.getAllProducts();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const addProduct = async (req, res) => {
  try {
    const newProduct = await s.addProduct(req.body);

    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};

export { getAllProducts, addProduct };
