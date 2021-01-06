const doctorSchema = require('../schemas/doctorSchema')
const doctorModel = require('../models/doctorModel')
const statusMessages = require('../constant/statusMessages')
const { encryptPassword, decryptPassword } = require('../helpers/passwordHelper')
const { generateToken } = require('../helpers/authorizationHelper')

const createDoctor = async (req, res) => {
    try {
        const validateDoctor = await doctorSchema.validateAsync(req.body)
        const hashedPassword = await encryptPassword(validateDoctor.password)
        if (hashedPassword === false) {
            res.json(statusMessages.ERR_MSG.OP_FAILED)
        }
        else {
            validateDoctor.password = hashedPassword
            console.log('Doctor', validateDoctor)
            const doctor = new doctorModel(validateDoctor)
            if (validateDoctor) {
                const response = await doctor.save()
                if (response) {
                    statusMessages.SUCCESS_MSG.SUCCESS.data = response
                    res.json(statusMessages.SUCCESS_MSG.SUCCESS)
                }
                else {
                    res.json(statusMessages.ERR_MSG.SOMETHING_WENT_WRONG)
                }
            }
            else {
                statusMessages.ERR_MSG.OP_FAILED.message = validateDoctor
                res.json(statusMessages.ERR_MSG.OP_FAILED)
            }
        }


    }
    catch (error) {
        statusMessages.ERR_MSG.IMP_ERROR.message = error.message
        res.json(statusMessages.ERR_MSG.IMP_ERROR)
    }
}

const loginDoctor = async (req, res) => {
    const { email, password } = req.body
    const userEmail = email.toLowerCase()
    const response = await doctorSchema.findOne({ email })
    if (response) {
        if (response.email === userEmail) {
            const deHash = await decryptPassword(password, response.password)
            if (deHash) {
                const { _id, username, profile_id, userType } = response
                const token = await generateToken(response.email, username, _id, userType)
                if (token) {
                    statusMessages.SUCCESS_MSG.SUCCESS.data = { _id, username, profile_id, userType, token }
                    res.json(statusMessages.SUCCESS_MSG.SUCCESS)
                }
                else {
                    res.json(statusMessages.ERR_MSG.OP_FAILED)
                }
            }
            else {
                res.json(statusMessages.ERR_MSG.PWD_NOT_MATCH)
            }
        }
        else {
            res.json(statusMessages.ERR_MSG.EMAIL_NOT_MATCH)
        }
    }
    else {
        res.json(statusMessages.ERR_MSG.DATA_NOT_FOUND)
    }
}

module.exports = {
    createDoctor,
    loginDoctor
}