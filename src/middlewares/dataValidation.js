import joi from 'joi'
import {Response} from '../helpers/response'

function validator(req,res,next) {
    const schema = {
        name: joi.string().required(),
        nationalId:joi.number().min(16).max(16),
        phoneNumber:joi.number().required(),
        email:joi.string().required().email(),
        dob:joi.date().required(),
        status:joi.string().required(),
        position:joi.string().required(),

    }

    const {error} = schema.validate(req.body)
    if (error) return Response.errorResponse(res,`${error.details[0].message}`,422)
    next()
}

export default validator