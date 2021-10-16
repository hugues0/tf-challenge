import dotenv from "dotenv";
import Response from "../helpers/response";
import ManagersServices from "../services/managersService";
import generateToken from "../helpers/tokenGen";
import passwordEncryptor from "../helpers/encryptor";
import passwordDecryptor from "../helpers/decryptor";
import mailer from "../helpers/mailSender";
import randomCodeGen from "../helpers/codeGen";

dotenv.config();

// sign up
class ManagersController {
  static async addManager(req, res) {
    try {
      let { email, password } = req.body;
      const existingManager = await ManagersServices.findUserByEmail(email);
      if (existingManager) {
        return Response.errorResponse(
          res,
          "Manager with the same email already in the database",
          409
        );
      }
      req.body.code = randomCodeGen();
      req.body.password = await passwordEncryptor(password);
      req.body.position = "MANAGER";
      const addManager = await ManagersServices.createManager(req.body);
      const managerInfo = { ...addManager };
      delete managerInfo.password;
      return Response.successResponse(
        res,
        201,
        "New manager added",
        managerInfo
      );
    } catch (error) {
      return error.message;
    }
  }

  //Manager login
  static async loginManager(req, res) {
    try {
      const { email, password } = req.body;
      const checker = await ManagersServices.findUserByEmail(email);
      if (!checker)
        return Response.errorResponse(
          res,
          "Invalid email,please try again",
          401
        );
      const passwordChecker = await passwordDecryptor(
        password,
        checker.password
      );
      if (!passwordChecker)
        return Response.errorResponse(
          res,
          "Invalid password,please try again",
          401
        );
      const { nId } = checker;
      const token = generateToken(nId);
      const data = { email, token };
      return Response.successResponse(
        res,
        200,
        "Manager Successfully logged in",
        data
      );
    } catch (error) {
      return error.message;
    }
  }

  static async resetPassword(req, res) {
    const { email } = req.body;
    const managerExist = await ManagersServices.findUserByEmail(email);
    if (!managerExist) {
      return Response.errorResponse(
        res,
        "Sorry! we cant find that email in our Database",
        404
      );
    }
    const token = generateToken({ nId: managerExist.nId });
    const emailView = mailer.resetPassword(managerExist, token);
    mailer.sendEmail(req.body.email, "Reset password", emailView);
    return Response.successResponse(
      res,
      200,
      "You can now reset your password"
    );
  }

  static async setPassword(req, res) {

    try {
      let { password } = req.body;
      let { nId } = req.user;

      const existingManager = await ManagersServices.findManageBynId(
        nId
        );

      if (!existingManager)
        return Response.successResponse(
          res,
          "Invalid user",
          200,
          existingManager
        );

      password = await passwordEncryptor(password);

    await ManagersServices.updatePassword(
        req.user.nId,
        { password }
      );
      return Response.successResponse(res, 200, "password changed successfull");
    } catch (error) {
      return error.message;
    }
  }
}

export default ManagersController;
