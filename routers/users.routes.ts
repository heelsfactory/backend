import express from "express";
import {login, creasteUser} from "../controllers/users.controller";
const router = express.Router();

router.post("/login", login);
router.post('/create-user', creasteUser)
export default router;
