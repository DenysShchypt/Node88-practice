import { getProducts } from "../../services/productsServices.js";

const getAllProducts = async (req, res) => {
    const result = await getProducts();
    res.json(result);
};

export default getAllProducts; 