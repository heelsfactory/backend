"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const monthlyCost_controller_1 = require("../controllers/monthlyCost.controller");
const router = express_1.default.Router();
router.post('/add-monthly-cost', monthlyCost_controller_1.addMonthlyCost);
router.post('/get-monthly-cost-by-month', monthlyCost_controller_1.getMonthlyCostbyMonth);
router.get('/fetch-all-monthly-cost', monthlyCost_controller_1.fetchAll);
exports.default = router;
