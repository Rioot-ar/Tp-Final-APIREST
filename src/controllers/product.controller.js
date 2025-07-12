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
const getProduct = async (req, res) => {
  const producto = await productService.getById(req.params.id);
  if (!producto) return res.status(404).json({ mensaje: 'Producto no encontrado' });
  res.json(producto);
};
const postProduct = async (req, res) => {
  try {
    const { nombre, precio, stock } = req.body;
    // validar campos
    const newProduct = {
      nombre,
      precio: +precio,
      stock: stock || 0,
    };

     await productService.create(newProduct);
    res.status(200).json({ message: "Lista de productos", payload: newProduct });
  } catch (error) {
    res
      .status(500)
      .json({ message: "error interno del servidor", error: error.message });
  }
};
const putProduct = async (req, res) => {
  const existe = await productService.getById(req.params.id);
  if (!existe) return res.status(404).json({ mensaje: 'Producto no encontrado' });

  const actualizado = await productService.update(req.params.id, req.body);
  res.json(actualizado);
};
export default { getProducts, postProduct, putProduct, getProduct };
