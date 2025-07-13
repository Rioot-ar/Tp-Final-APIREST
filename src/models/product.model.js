// model
import { db } from "../config/db.js";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const productCollection = collection(db, "productos");

export const getAllProducts = async () => {
  try {
    const productList = await getDocs(productCollection);
    const products = [];
    productList.forEach((doc) => products.push({ id: doc.id, ...doc.data() }));

    return products;
  } catch (error) {
    throw new Error("Error al obtener productos", error.message);
  }
};
export const getProductById = async (id) => {
  try {
    const productRef = doc(productCollection, id);
    const productSnap = await getDoc(productRef);

    if (!productSnap.exists()) res.status(404).json({ error: 'Producto no encontrado' });

    return { id: productSnap.id, ...productSnap.data() };
  } catch (error) {
    throw new Error(`Error al obtener el producto: ${error.message}`);
  }
};

export const saveProduct = async (product) => {
  try {
    const newProduct = await addDoc(productCollection, product);
    return newProduct
  } catch (error) {
    throw new Error("Error al guardar el producto", error.message);
  }
};

export const updateProduct = async (id, product) => {
  try {
    const productRef = doc(productCollection, id);
    await updateDoc(productRef, product);
    const updatedDoc = await getDoc(productRef);
    return { id: updatedDoc.id, ...updatedDoc.data() };
  } catch (error) {
    throw new Error(`Error al actualizar producto: ${error.message}`);
  }
};

export const deleteProduct = async (id) => {
  try {
    const productRef = doc(productCollection, id);
    if (!productRef.exists()) res.status(404).json({ error: 'Producto no encontrado' });;
    await deleteDoc(productRef);
    return { mensaje: 'Producto eliminado correctamente' };
  } catch (error) {
    throw new Error(`Error al eliminar producto: ${error.message}`);
  }
};