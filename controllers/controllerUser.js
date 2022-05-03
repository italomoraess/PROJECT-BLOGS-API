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
    const user = await serviceUser.getById(id);
    if (!user) return res.status(404).json({ message: 'User does not exist' });
    res.status(200).json(user);
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
    process.env.JWT_SECRET,
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