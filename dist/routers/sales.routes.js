"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sales_controller_1 = require("../controllers/sales.controller");
const router = express_1.default.Router();
router.post("/add-sale", sales_controller_1.addSale);
router.get('/fetch-all-sales', sales_controller_1.fetchAllSales);
exports.default = router;
