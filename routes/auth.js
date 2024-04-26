const express = require('express');
const { register,login,forgotPassword, logout } = require('../controllers/auth');

const router = express.Router();


router.post('/register', register);
router.post('/login', login);
router.post('/forgotpassword', forgotPassword);
router.get('/logout', logout);

module.exports = router;