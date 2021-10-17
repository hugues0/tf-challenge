import express from 'express'
import auth from '../middlewares/auth.js'
import employeeController from '../controllers/employeeController.js'
import validateData from '../middlewares/employeeValidation'
const {
  getAllEmployees,
  addEmployee,
  getSingleEmployee,
  updateEmployee,
  deleteEmployee,
  searchEmployeeByName,
  searchEmployeeByEmail,
  searchEmployeeByPosition,
  searchEmployeeByPhoneNumber,
  searchEmployeeByCode,
} = employeeController;

const router = express.Router()

router.post('/',validateData,auth,addEmployee)
router.put("/:id", auth, updateEmployee);
router.delete("/:id", auth, deleteEmployee);
router.get("/", auth, getAllEmployees);
router.get("/:id", auth, getSingleEmployee);
router.get("/search-by-name/:name", auth, searchEmployeeByName);
router.get("/search-by-email/:email", auth, searchEmployeeByEmail);
router.get("/search-by-position/:position", auth, searchEmployeeByPosition);
router.get(
  "/search-by-phone-number/:phoneNumber",
  auth,
  searchEmployeeByPhoneNumber
);
router.get("/search-by-code/:code", auth, searchEmployeeByCode);

export default router
