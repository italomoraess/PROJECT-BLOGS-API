const { User } = require('../models');

const verifyName = (req, res, next) => {
  const { displayName } = req.body;

  if (displayName.length < 8) {
    return res.status(400)
      .json({ message: '"displayName" length must be at least 8 characters long' });
  }

  next(); 
};

const verifyEmail = async (req, res, next) => {
  const { email } = req.body;
  const emailReg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  
  if (!email) return res.status(400).json({ message: '"email" is required' });
  if (!emailReg.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  const emailExist = await User.findOne({ where: { email } });

  if (emailExist) return res.status(409).json({ message: 'User already registered' });

  next();
};

const verifyPassword = (req, res, next) => {
  const { password } = req.body;

  if (!password) return res.status(400).json({ message: '"password" is required' });
  if (password.length < 6 || password.length > 6) {
    return res.status(400).json({ message: '"password" length must be 6 characters long' });
  }

  next();
};

module.exports = {
  verifyName,
  verifyEmail,
  verifyPassword,
  };