const bcrypt = require('bcrypt');
const saltRounds = 10;


const encryptPassword = async (password) => {
    try {
        const hash = await bcrypt.hash(password, saltRounds);
        if (hash) {
            return hash
        }
        else {
            return false
        }
    }
    catch (error) {
        return error
    }
}

const decryptPassword = async (password, hashedPassword) => {
    try {
        const match = await bcrypt.compare(password, hashedPassword)
        if (match) {
            return true
        }
        else {
            return false
        }
    }
    catch (error) {
        return error
    }
}

module.exports = {
    encryptPassword,
    decryptPassword
}