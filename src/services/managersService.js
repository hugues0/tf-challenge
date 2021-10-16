import sequalize from 'sequelize'
import db from '../db/models'

class ManagersServices {
  static async createManager(newManager) {
    try {
      return await db.manager.create(newManager);
    } catch (er) {
      return undefined;
    }
  }

  static async findUserByEmail(email) {
    try {
      const user = await db.manager.findOne({ where: { email } });
      if (!user) return null;
      return user;
    } catch (er) {
      return undefined;
    }
  }

  static async updatePassword(id, updateInfo) {
    try {
      return await db.manager.update({ ...updateInfo }, { where: { nId: id } });
    } catch (er) {
      return undefined;
    }
  }

  static async findManageBynId(id) {
    try {
      const employee = await db.manager.findOne({ where: { nId: id } });
      if (!employee) return null;
      return employee;
    } catch (er) {
      return undefined;
    }
  }
}

export default ManagersServices