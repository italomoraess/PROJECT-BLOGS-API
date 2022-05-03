const { Category } = require('../models');

const update = async ({ name }) => {
  try {
  const insertCategoty = await Category.create({ name });
  return insertCategoty;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  update,
};