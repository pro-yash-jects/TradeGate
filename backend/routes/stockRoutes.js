import express from "express"
import { searchStock } from "../controller/stockController.js";

const router = express.Router();

router.get('/search/:symbol', searchStock)

export default router;