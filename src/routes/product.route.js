//router
import { Router } from "express";
import productController from "../controllers/product.controller.js";

const router = Router();

router.get("/", productController.getProducts);
router.get("/:id", productController.getProduct);
router.post("/create", productController.postProduct);
router.put("/:id", productController.putProduct);
router.delete("/:id",productController.deleteProduct);

export default router;
