const jwt = require('jsonwebtoken');
const { User, Category, BlogPost, PostsCategory } = require('../models');
require('dotenv').config();

const update = async ({ title, content, categoryIds, authorization }) => {
  const token = jwt.verify(authorization, process.env.JWT_SECRET);
  console.log(token);

  const user = await User.findOne({ where: { email: token.email } });

  const insertPost = await BlogPost.create({ 
    title, content, userId: user.id, published: new Date(), updated: new Date(), 
  });

  categoryIds.map((categoryId) => PostsCategory.create({ postId: insertPost.id, categoryId }));

  return { id: insertPost.id, userId: user.id, title, content };
};

const getAll = async () => {
 const allCategories = await BlogPost.findAll({ include: [
  { model: User, as: 'user' },
  { model: Category, as: 'categories', attributes: { exclude: ['PostsCategory'] } },
  ] });
 return allCategories;
};

module.exports = {
  update,
  getAll,
};