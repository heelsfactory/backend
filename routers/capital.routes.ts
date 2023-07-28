import express from "express";
import { addMonthlyCost, fetchAll, getMonthlyCostbyMonth } from "../controllers/monthlyCost.controller";

const router = express.Router();


router.post('/add-monthly-cost', addMonthlyCost)
router.post('/get-monthly-cost-by-month', getMonthlyCostbyMonth)

router.get('/fetch-all-monthly-cost', fetchAll)

export default router
