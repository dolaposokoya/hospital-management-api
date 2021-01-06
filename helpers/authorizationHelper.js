const jwt = require('jsonwebtoken')
const { JWT_SECRET_KEY } = process.env


const generateToken = async (email, username, _id, user_type) => {
    try {
        const token = jwt.sign({ email, username, _id, user_type }, JWT_SECRET_KEY, { expiresIn: '24h' }, { algorithm: 'RS256' })
        if (token) {
            return token
        } else {
            return false
        }
    } catch (err) {
        return false;
    }
}

const checkToken = async (token) => {
    try {
        const userToken = token.split(' ')[1];
        if (userToken === '' || userToken === undefined || userToken === null) {
            return {
                success: false,
                error: 'Please provide a token'
            }
        } else {
            return {
                token: jwt.verify(userToken, JWT_SECRET_KEY),
                success: true,
                error: false
            };
        }
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}

module.exports = {
    generateToken,
    checkToken
}