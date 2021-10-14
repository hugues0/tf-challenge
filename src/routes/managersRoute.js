import express from "express";
import auth from "../middlewares/auth.js";
import ManagersController from '../controllers/managersController'
const {addManager,loginManager} = ManagersController
const router = express.Router();

router.post("/signup", addManager);
router.post("/signin", loginManager);

export default router;