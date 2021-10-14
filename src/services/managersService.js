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
}

export default ManagersServices