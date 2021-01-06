const Joi = require('joi');

const patientSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    images: Joi.string().optional(),
    email: Joi.string().email().lowercase().required()
})
module.exports = patientSchema;