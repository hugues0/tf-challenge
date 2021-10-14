import express from "express";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.post("/signup", addManager);
router.post("/signin", managerLogin);

export default router;