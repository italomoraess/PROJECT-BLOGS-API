const { User } = require('../models');

const getAll = async () => {
  try { 
    return await User.findAll();
  } catch (err) {
    console.log(err);
  }
};

const getById = async (id) => {
  try {
    return await User.findByPk(id);
  } catch (err) {
    console.log(err);
  }
};

const update = async ({ displayName, email, password, image }) => {
  try {
   return await User.create({ displayName, email, password, image });
  } catch (err) {
    console.log(err);
  } 
};

module.exports = {
  getAll,
  getById,
  update,
};