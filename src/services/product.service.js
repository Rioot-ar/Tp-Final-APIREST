// services
import { getAllProducts, saveProduct, getProductById, updateProduct,deleteProduct } from "../models/product.model.js";

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
const remove = async (id, productData) => {
  return await deleteProduct(id);
};

export default { getAll, create,update,getById,remove };
