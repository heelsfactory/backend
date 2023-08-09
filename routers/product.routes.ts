import express from "express";
import { createProduct, deleteProductById, fetchProductById, fetchProducts } from "../controllers/product.controller";
const router = express.Router();

router.post("/create-product", createProduct);
router.get("/fetch-products", fetchProducts);
router.post("/fetch-product", fetchProductById);
router.post("/delete", deleteProductById);




export default router;
