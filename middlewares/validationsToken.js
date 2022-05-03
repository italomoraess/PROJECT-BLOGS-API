const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const { authorization } = req.headers;
  
    if (!authorization) return res.status(401).json({ message: 'Token not found' });
  
    let invalidToken;
    jwt.verify(authorization, process.env.JWT_SECRET, (err) => {
      if (err) invalidToken = true;
    });
    if (invalidToken) return res.status(401).json({ message: 'Expired or invalid token' });
  
    next();
  };

module.exports = {
    verifyToken,
};