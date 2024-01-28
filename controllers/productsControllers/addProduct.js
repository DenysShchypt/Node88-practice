import { Product } from "../../models/productSchema.js";
import { v2 as cloudinary } from "cloudinary";
import path from "path";
import "dotenv/config";
const { CLOUD_NAME, API_KEY, API_SECRET } = process.env;

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET,
  use_filename: true,
  unique_filename: true,
});

const addProduct = async (req, res) => {
  const { path: pathPhoto, filename } = req.file;
  const fileName = path.parse(filename);
  const cloudinaryResult = await cloudinary.uploader.upload(pathPhoto, {
    public_id: fileName.name,
    width: 250,
    crop: "scale",
  });

  const newProduct = await Product.create({ ...req.body });

  res.status(201).json(newProduct);
};

export default addProduct;
