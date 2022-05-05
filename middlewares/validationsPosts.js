const { Category } = require('../models');

const verifyTitle = (req, res, next) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ message: '"title" is required' });

  next();
};

const verifyContent = (req, res, next) => {
  const { content } = req.body;
  if (!content) return res.status(400).json({ message: '"content" is required' });

  next();
};

const verifyCategory = async (req, res, next) => {
  const { categoryIds } = req.body;
  if (!categoryIds) return res.status(400).json({ message: '"categoryIds" is required' });
  
  const categoies = await Category.findAll({ where: { id: categoryIds } });
  if (categoies.length !== categoryIds.length) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }

  next();
};

module.exports = {
  verifyTitle,
  verifyCategory,
  verifyContent,
};