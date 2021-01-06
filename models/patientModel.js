const Joi = require('joi');

const patientModel = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    specialization: Joi.string().required(),
    images: Joi.string().optional(),
    email: Joi.string().email().required()
})
module.exports = patientModel;