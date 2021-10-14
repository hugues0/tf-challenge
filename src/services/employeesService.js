import sequelize from "sequelize";
import db from "../db/models/index.js";
import { op, where, cast, col } from "sequelize";

class employeesService {
  static async createEmployee(newwEmployee) {
    return await db.employee.create(newwEmployee);
  }

  static async getEmployees() {
    return await db.employee.findAndCountAll();
  }

  static async findEmployeeById(id) {
    try {
      const employee = await db.employee.findOne({ where: { nId: id } });
      if (!employee) return null;
      return student;
    } catch (er) {
      return undefined;
    }
  }

  static async deleteEmployeeById(id) {
    try {
      await db.employee.destroy({ where: { nId: id } });
      return {
        status: 200,
        message: "Employee successfully deleted",
      };
    } catch (er) {
      return {
        status: 500,
        message: er.message,
      };
    }
  }

  static async updateEmployeeById(
    id,
    name,
    nId,
    phoneNumber,
    email,
    dob,
    status,
    position
  ) {
    try {
      return await db.employee.update(
        { name, nId, phoneNumber, email, dob, status, position },
        { where: { nId: id } }
      );
    } catch (error) {
      return {
        status: 500,
        message: error.message,
      };
    }
  }
}

export default employeesService;
