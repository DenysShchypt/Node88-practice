import { createError } from "../../helpers/index.js";
import { updateProductById } from "../../services/productsServices.js";

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const result = await updateProductById(id, req.body);
    if (!result) {
        throw createError(404, `Product with ${id} not found`);
    }
    res.json(result);
};

export default updateProduct;