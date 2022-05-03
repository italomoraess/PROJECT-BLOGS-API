const express = require('express');

const router = express.Router();
const { verifyEmail, verifyPassword } = require('../middlewares/validationsLogin');
const controllerLogin = require('../controllers/controllerLogin');

router.post('/', verifyEmail, verifyPassword, controllerLogin.searchUser);

module.exports = router;