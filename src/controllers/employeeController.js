import employeesService from '../services/employeesService'
import Response from '../helpers/response'


class employeesController {
    static async getAllEmployees (req,res) {
        try{
            const getEmployees = await employeesService.getEmployees()
            if (getEmployees.count <=0) {
                return Response.successResponse(res,404,"No employees registered yet")

            }
            return Response.successResponse(res,200,"list of employees",getEmployees)
        } catch (error) {
            return Response.errorResponse(res, error.message, 500);
        }
    }

    static async addEmployee(req,res) {
        try{
            const newEmployee = await employeesService.createEmployee(req.body)
            return Response.successResponse(res,201,"New employee recorded",{name:newEmployee.name,code:newEmployee.code,email:newEmployee.email})
        } catch (error) {
            return Response.errorResponse(res,error.message,500)
        }
    }

    static async getEmployeeById(req,res) {
        try{
            const employee = await employeesService.findEmployeeById(req.params.id)
            if (!employee || employee.count <=0) {
                return Response.errorResponse(res,"No Employee with that given ID found in the database",404)
            }
        } catch (error) {
            return Response.errorResponse(res,error.message,500)
        }
    }

    static async updateEmployeeById(req,res) {
        try{
            const employee = await employeesService.findEmployeeById(req.params.id)
            if(!employee || employee.count<=0) {
                return Response.errorResponse(res,"No employee with that given ID found in database",404)
            }
            const {name,nId,phoneNumber,email,dob,status,position} = req.body
            const id = req.params.id
            await employeesService.updateEmployeeById(
              id,
              name,
              nId,
              phoneNumber,
              email,
              dob,
              status,
              position
            );
            return Response.successResponse(res,200,"Employee info updated",{name,nId,phoneNumber,email,dob,status,position})
        } catch (error) {
            return Response.errorResponse(res,error.message,500)
        }
    }

    static async deleteEmployeeById(req,res) {
        try{
            const employee = await employeesService.findEmployeeByIda(req.params.id)
            if (!employee || employee.count <= 0) {
                return Response.errorResponse(res,"No employee with that given ID found in database",404)
            }
            await employeesService.deleteEmployeeById(req.params.id)
            return Response.successResponse(res,200,"Employee successfully deleted")
        } catch (err) {
            return Response.errorResponse(res,err.message,500)
        }
    }
}

export default employeesController