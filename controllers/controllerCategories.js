const servicesCategories = require('../services/servicesCategories');

const update = async (req, res) => {
  try {
  const { name } = req.body;
  const insertCategoty = await servicesCategories.update({ name });
  console.log(insertCategoty);
  return res.status(201).json(insertCategoty);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  update,
};