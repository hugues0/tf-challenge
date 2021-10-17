import sequelize from "sequelize";
import db from "../db/models";
//import { op, where, cast, col } from "sequelize";

class employeesService {
  static async createEmployee(newwEmployee) {
    return await db.employee.create(newwEmployee);
  }

  static async getEmployees() {
    return await db.employee.findAndCountAll();
  }

  static async findEmployeeById(id) {
    try {
      const employee = await db.employee.findOne({ where: { id: id } });
      if (!employee) return null;
      return employee;
    } catch (er) {
      return undefined;
    }
  }

  static async findEmployeeByPhone(phone) {
    try {
      const employee = await db.employee.findOne({
        where: { phoneNumber: phone },
      });
      if (!employee) return null;
      return employee;
    } catch (er) {
      return undefined;
    }
  }

  static async findEmployeeByCode(code) {
    try {
      const employee = await db.employee.findOne({
        where: { code: code },
      });
      if (!employee) return null;
      return employee;
    } catch (er) {
      return undefined;
    }
  }

  static async findEmployeeByName(name) {
    try {
      const employee = await db.employee.findOne({
        where: { name: name },
      });
      if (!employee) return null;
      return employee;
    } catch (er) {
      return undefined;
    }
  }

  static async findEmployeeByPosition(position) {
    try {
      const employee = await db.employee.findAndCountAll({
        where: { position: position },
      });
      if (!employee) return null;
      return employee;
    } catch (er) {
      return undefined;
    }
  }

  static async findEmployeeByEmail(email) {
    try {
      const employee = await db.employee.findOne({
        where: { email: email },
      });
      if (!employee) return null;
      return employee;
    } catch (er) {
      return undefined;
    }
  }

  static async deleteEmployeeById(id) {
    try {
      await db.employee.destroy({ where: { id: id } });
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
        { where: { id: id } }
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
