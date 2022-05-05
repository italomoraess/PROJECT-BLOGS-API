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

const verifyCategory = (req, res, next) => {
  const { categoryIds } = req.body;
  if (!categoryIds) return res.status(400).json({ message: '"categoryIds" is required' });
  categoryIds.map(async (categoryId) => {
    const verify = await Category.findByPk(categoryId);
    if (!verify) return res.status(400).json({ message: '"categoryIds" not found' });
  });

  next();
};

module.exports = {
  verifyTitle,
  verifyCategory,
  verifyContent,
};