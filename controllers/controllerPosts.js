const servicesPosts = require('../services/servicesPosts');

const update = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { authorization } = req.headers;

  const insertPost = await servicesPosts.update({ title, content, categoryIds, authorization });

  return res.status(201).json(insertPost);
};

const getAll = async (req, res) => {
  const allCategories = await servicesPosts.getAll();

  return res.status(200).json(allCategories);
};

module.exports = {
  update,
  getAll,
};