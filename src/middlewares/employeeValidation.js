import joi from "joi";
import Response from "../helpers/response";

function validateData(req, res, next) {
  const schema = {
    name: joi.string().required(),
    nId: joi.number().min(1000000000000000).max(9999999999999999),
    phoneNumber: joi.number().required(),
    email: joi.string().required().email(),
    dob: joi.date().required(),
    status: joi.string().required(),
    position: joi.string().required(),
  };

  const { error } = joi.validate(req.body, schema);
  if (error)
    return Response.errorResponse(res, `${error.details[0].message}`, 422);
  next();
}

export default validateData;
