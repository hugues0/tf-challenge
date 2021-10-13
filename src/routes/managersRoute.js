import express from "express";
import auth from "../middlewares/auth";

const router = express.Router();

router.post("/auth/signup", addManager);
router.post("/auth/signin", managerLogin);

export default router;