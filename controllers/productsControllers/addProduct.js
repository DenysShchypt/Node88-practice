import { addNewProduct } from "../../services/productsServices.js";

const addProduct = async (req, res) => {
    const newProduct = await addNewProduct(req.body);
    res.status(201).json(newProduct);
};

export default addProduct;