"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("../controllers/product.controller");
const router = express_1.default.Router();
router.post("/create-product", product_controller_1.createProduct);
router.get("/fetch-products", product_controller_1.fetchProducts);
router.post("/fetch-product", product_controller_1.fetchProductById);
router.post("/delete", product_controller_1.deleteProductById);
exports.default = router;
