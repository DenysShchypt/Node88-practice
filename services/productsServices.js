import fs from "fs/promises";
import { ObjectId } from "bson";
import path from "path";
const PATH = path.resolve("db", "products.json");

const getAllProducts = async () => {
  const data = await fs.readFile(PATH);
  const productsList = JSON.parse(data);
  return productsList;
};

export { getAllProducts };
