const express = require('express');

const router = express.Router();
const { 
  verifyName, 
  verifyEmail,
  verifyPassword,
} = require('../middlewares/validationsUsers');

const { 
  getAll, 
  getById, 
  update,
} = require('../controllers/controllerUser');

const { verifyToken } = require('../middlewares/validationsToken');

router.post('/', verifyName, verifyEmail, verifyPassword, update);
router.get('/', verifyToken, getAll);
router.get('/:id', verifyToken, getById);

module.exports = router;