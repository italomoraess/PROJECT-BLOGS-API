const jwt = require('jsonwebtoken');
const servicesLogin = require('../services/servicesLogin');

const searchUser = async (req, res) => {
  const { email, password } = req.body;
  const userExist = await servicesLogin.searchUser({ email, password });
  if (!userExist) return res.status(400).json({ message: 'Invalid fields' });
  const token = jwt.sign(
    { email: userExist.email }, 
    process.env.JWT_SECRET,
    { expiresIn: '1h', algorithm: 'HS256' },
  );
  return res.status(200).json({ token });
};

module.exports = {
  searchUser,
};