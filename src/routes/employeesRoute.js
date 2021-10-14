import express from 'express'
import auth from '../middlewares/auth.js'
import employeeController from '../controllers/employeeController.js'

const {getAllEmployees,addEmployee,getSingleEmployee,updateEmployee,deleteEmployee} = employeeController

const router = express.Router()

router.post('/',auth,addEmployee)
router.put("/:id", auth, updateEmployee);
router.delete("/:id", auth, deleteEmployee);
router.get("/", auth, getAllEmployees);
router.get("/:id", auth, getSingleEmployee);

export default router
