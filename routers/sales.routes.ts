import express from "express";
import { addSale, fetchAllSales } from "../controllers/sales.controller";
const router = express.Router();

router.post("/add-sale", addSale);
router.get('/fetch-all-sales', fetchAllSales)


export default router;
