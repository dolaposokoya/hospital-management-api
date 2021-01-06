const Joi = require('joi');

const doctorSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    specialization: Joi.string().required(),
    profileImage: Joi.string().optional(),
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,18}$')).required(),
    email: Joi.string().email().lowercase().required()
})
module.exports = doctorSchema;