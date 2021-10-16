import jwt from "jsonwebtoken";
import Response  from "../helpers/response.js";

const auth = (req, res, next) => {
  const token = req.header("token");
  if (!token) {
    return Response.errorResponse(res,"Access denied,no token provided!", 401);
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT);
    req.user = decoded.payload;
    next();
  } catch (error) {
    return Response.errorResponse(res,"Access denied,expired or invalid token", 401);
  }
  return token;
};

export default auth;
