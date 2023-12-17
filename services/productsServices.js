import fs from "fs/promises";
import { ObjectId } from "bson";
import path from "path";
import { json } from "express";
const PATH = path.resolve("db", "products.json");

const getAllProducts = async () => {
  const data = await fs.readFile(PATH);
  const productsList = JSON.parse(data);
  return productsList;
};

const addProduct = async (product) => {
  try {
    product._id = new ObjectId();
    product.sale = 0;

    const arr = await getAllProducts();
    arr.push(product);

    
    await fs.writeFile(PATH, JSON.stringify(arr, null, 2));

    return product; 

  } catch (error) {
    throw error; 
  }
};

export { getAllProducts, addProduct };
