const express = require('express');

const router = express.Router();
const { verifyName, verifyEmail, verifyPassword } = require('../middlewares/validations');
const controllerUser = require('../controllers/controllerUser');

router.post('/', verifyName, verifyEmail, verifyPassword, controllerUser.update);
router.get('/', controllerUser.getAll);
router.get('/:id', controllerUser.getById);

module.exports = router;