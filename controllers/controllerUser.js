const jwt = require('jsonwebtoken');
require('dotenv').config();
const serviceUser = require('../services/servicsUser');

const getAll = async (req, res) => {
  try {
    const Users = await serviceUser.getAll();
    res.status(200).json(Users);
  } catch (err) {
    console.log(err);
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const User = await serviceUser.getById(id);
    res.status(200).json(User);
  } catch (err) {
    console.log(err);
  }
};

const update = async (req, res) => {
  try {
  const { displayName, email, password, image } = req.body;
  const user = await serviceUser.update({ displayName, email, password, image });
  const token = jwt.sign(
    { id: user.id }, 
    process.env.JWT_SECRET_KEY,
    { expiresIn: '1h', algorithm: 'HS256' },
  );
  res.status(201).json({ token });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAll,
  getById,
  update,
};