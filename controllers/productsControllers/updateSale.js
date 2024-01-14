import createError from "../../helpers/createError.js";
import { Product } from "../../models/productSchema.js";

const updateSale = async (req, res) => {
    const { id } = req.params;
    const result = await Product.findByIdAndUpdate(id, req.body, {
        new: true,
        select: "_id sale",
    });
    if (!result) {
        createError(404, "Not found");
    }
    res.status(200).json(result);
};
export default updateSale;
