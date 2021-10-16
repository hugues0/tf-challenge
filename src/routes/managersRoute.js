import express from "express";
import auth from "../middlewares/auth.js";
import validator from '../middlewares/dataValidation'
import resetValidator from "../middlewares/resetValidation";
import ManagersController from '../controllers/managersController'
const { addManager, loginManager, resetPassword, setPassword } =
  ManagersController;
const router = express.Router();

router.post("/signup", validator, addManager);
router.post("/signin", loginManager);
router.post("/reset", resetPassword);
router.patch("/set-password", auth ,resetValidator, setPassword);

export default router;