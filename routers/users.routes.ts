import express from "express";
import login from "../controllers/users.controller";
const router = express.Router();

router.post("/login", login);

export default router;