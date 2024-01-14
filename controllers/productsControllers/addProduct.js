import { Product } from "../../models/productSchema.js";

const addProduct = async (req, res) => {
  const newProduct = await Product.create({...req.body});
  console.log(newProduct);
  res.status(201).json(newProduct);
};

export default addProduct;
