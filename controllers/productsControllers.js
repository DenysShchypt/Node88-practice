import * as s from "../services/productsServices.js";

const getAllProducts = async (req, res, next) => {
  try {
    const result = await s.getAllProducts();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export { getAllProducts };
