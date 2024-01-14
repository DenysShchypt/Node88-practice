import { Schema, model } from "mongoose";
import Joi from "joi";
import { handleMongoos } from "../helpers/index.js";
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
        default: 0
    }
},// Дата створення і дата оновлення
    { versionKey: false, timestamps: true });

schemaProducts.post('save', handleMongoos);

const addProductsSchema = Joi.object({
    name: Joi.string().required().min(3),
    price: Joi.number().required().min(1)
});

const updateProductsSchema = Joi.object({
    name: Joi.string().min(3),
    price: Joi.number().min(1)
});
const updateSaleSchema = Joi.object({
    sale: Joi.number().min(0).max(100).required()
});
const Product = model('product', schemaProducts);

export { Product,updateProductsSchema,addProductsSchema,updateSaleSchema }