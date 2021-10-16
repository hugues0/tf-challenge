import joi from 'joi'
import Response from '../helpers/response'

function validator(req,res,next) {
    const schema = {
      password: joi.string().required(),
      confirmPassword: joi.string().required().valid(joi.ref("password")),
    };

    const { error } = joi.validate(req.body, schema);
    if (error) return Response.errorResponse(res,`${error.details[0].message}`,422)
    next()
}

export default validator