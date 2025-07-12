// services
import { getAllProducts, saveProduct, getProductById, updateProduct } from "../models/product.model.js";

const getAll = async () => {
  return await getAllProducts();
};
const create = async (product) => {
  return await saveProduct(product);
};
const getById = async (id) => {
  return await getProductById(id);
};
const update = async (id, productData) => {
  return await updateProduct(id, productData);
};

export default { getAll, create,update,getById };
