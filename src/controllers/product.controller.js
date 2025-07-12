// controller
import productService from "../services/product.service.js";
const getProducts = async (req, res) => {
  try {
    const products = await productService.getAll();
    res.status(200).json({ message: "Lista de productos", payload: products });
  } catch (error) {
    res
      .status(500)
      .json({ message: "error interno del servidor", error: error.message });
  }
};
const createProduct = async (req, res) => {
  try {
    const { nombre, precio, stock } = req.body;
    // validar campos
    const newProduct = {
      nombre,
      precio: +precio,
      stock: stock || 0,
    };

     await productService.createProduct(newProduct);
    res.status(200).json({ message: "Lista de productos", payload: newProduct });
  } catch (error) {
    res
      .status(500)
      .json({ message: "error interno del servidor", error: error.message });
  }
};

export default { getProducts, createProduct };
