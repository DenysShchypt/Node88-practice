import { Schema, model } from "mongoose";
import Joi from "joi";
import { handleMongoos } from "../../helpers/index.js";
// const saleRange = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
const schemaProducts = new Schema({
    name: {
        type: String,
        required: [true, 'Set name for contact']
    },
    price: {
        type: Number,
        required: true
    },
    sale: {
        type: Number,
        // enum: saleRange,
        default: 0
    }
},// Дата створення і дата оновлення
    { versionKey: false, timestamps: true });

schemaProducts.post('save', handleMongoos);

const addProductsSchema = Joi.object({
    name: Joi.string().required().min(3),
    price: Joi.number().required().min(1),
});

const updateProductsSchema = Joi.object({
    name: Joi.string().min(3),
    price: Joi.number().min(1),
    sale: Joi.number().min(0).max(50)
});
const Product = model('product', schemaProducts);

export { Product,updateProductsSchema,addProductsSchema }