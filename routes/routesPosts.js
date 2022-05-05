const express = require('express');

const router = express.Router();
const { verifyToken } = require('../middlewares/validationsToken');
const { verifyTitle, verifyContent, verifyCategory } = require('../middlewares/validationsPosts');
const { update, getAll } = require('../controllers/controllerPosts');

router.post('/', verifyTitle, verifyContent, verifyCategory, verifyToken, update);
router.get('/', verifyToken, getAll);

module.exports = router;