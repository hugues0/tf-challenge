import express from "express";
import auth from "../middlewares/auth.js";
import validator from '../middlewares/dataValidation'
import ManagersController from '../controllers/managersController'
const {addManager,loginManager} = ManagersController
const router = express.Router();

router.post("/signup", validator, addManager);
router.post("/signin", loginManager);

export default router;