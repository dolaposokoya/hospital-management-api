const express = require('express');
const { loginDoctor } = require('../controllers/doctorController');
const router = express.Router();
const verifyToken = require('../middleware/authorizationMiddleware');

router.get('/getAllDoctors', verifyToken, loginDoctor)

router.post('/loginDoctor', loginDoctor)

module.exports = router