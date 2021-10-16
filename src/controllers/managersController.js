import dotenv from "dotenv";
import Response from "../helpers/response";
import ManagersServices from "../services/managersService";
import generateToken from "../helpers/tokenGen";
import passwordEncryptor from "../helpers/encryptor";
import passwordDecryptor from "../helpers/decryptor";
import randomCodeGen from "../helpers/codeGen";

dotenv.config();

// sign up
class ManagersController {
  static async addManager(req, res) {
    try {
      let {
        email,
        password,
      } = req.body;
      const existingManager = await ManagersServices.findUserByEmail(email);
      if (existingManager) {
        return Response.errorResponse(
          res,
          "Manager with the same email already in the database",
          409
        );
      }
      req.body.code = randomCodeGen();
      password = await passwordEncryptor(password);
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
}

export default ManagersController;
