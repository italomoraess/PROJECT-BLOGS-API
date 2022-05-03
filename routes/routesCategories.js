const express = require('express');
const { update, getAll } = require('../controllers/controllerCategories');
const { verifyName } = require('../middlewares/validationsCategories');
const { verifyToken } = require('../middlewares/validationsToken');

const router = express.Router();

router.post('/', verifyName, verifyToken, update);
router.get('/', verifyToken, getAll);

module.exports = router;