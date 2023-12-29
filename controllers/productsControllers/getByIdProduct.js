import { getProductById } from "../../services/productsServices.js";
import { createError } from "../../helpers/index.js";

const getByIdProduct = async (req, res) => {
    const { id } = req.params;
    const result = await getProductById(id);
    if (!result) {
        throw createError(404, `Product with ${id} not found`)
    }
    res.json(result)
};

export default getByIdProduct;