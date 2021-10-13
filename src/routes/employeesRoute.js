import express from 'express'
import auth from '../middlewares/auth'


const router = express.Router()

router.post('/',auth,addEmployee)
router.put("/:id", auth, updateEmployee);
router.delete("/:id", auth, deleteEmployee);
router.get("/", auth, getEmployees);
router.get("/:id", auth, getSingleEmployee);

export default router
