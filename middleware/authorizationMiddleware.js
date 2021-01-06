const statusMessages = require('../constant/statusMessages')
const { checkToken } = require('../helpers/authorizationHelper');
const doctorModel = require("../models/doctorModel");


module.exports = async (req, res, next) => {
    try {
        const legit = await checkToken(req.headers.token)
        if (legit.success === true) {
            req.user = legit.user_token
            const result = await doctorModel.findById({ _id: req.user._id })
            if (result) {
                next();
            }
            else {
                res.json(statusMessages.ERR_MSG.UNAUTHORIZATION_ACCESS)
            }
        }
        else {
            statusMessages.ERR_MSG.UNAUTHORIZATION_ACCESS.message = legit.error
            res.json(statusMessages.ERR_MSG.UNAUTHORIZATION_ACCESS);
        }
    }
    catch (error) {
        res.json(statusMessages.ERR_MSG.IMP_ERROR)
    }
}