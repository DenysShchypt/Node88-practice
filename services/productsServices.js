import fs from "fs/promises";
import { ObjectId } from "bson";
import path from "path";
const PATH = path.resolve("db", "products.json");

const getProducts = async () => {
  const data = await fs.readFile(PATH);
  const productsList = JSON.parse(data);
  return productsList;
};

const addNewProduct = async (product) => {
  try {
    product._id = new ObjectId();
    product.sale = 0;
    const arr = await getProducts();
    arr.push(product);
    await fs.writeFile(PATH, JSON.stringify(arr, null, 2));
    return product;

  } catch (error) {
    throw error;
  }
};

const getProductById = async (id) => {
  const products = await getProducts();
  const result = await products.find(product => product._id === id);
  return result || null
};

const updateProductById = async (id, data) => {
  const products = await getProducts();
  const indexProduct = await products.findIndex(product => product._id === id);
  if (indexProduct === -1) {
    return null
  }
  products[indexProduct] = { _id: id, ...data };
  await fs.writeFile(PATH, JSON.stringify(products, null, 2));
  return products[indexProduct];
};

const deleteProduct = async (id) => {
  const products = await getProducts();
  const indexProduct = await products.findIndex(product => product._id === id);
  if (indexProduct === -1) {
    return null
  }
  const [result] = products.splice(indexProduct, 1);
  await fs.writeFile(PATH, JSON.stringify(products, null, 2));
  return result;
};

export { getProducts, addNewProduct, getProductById, deleteProduct, updateProductById };
