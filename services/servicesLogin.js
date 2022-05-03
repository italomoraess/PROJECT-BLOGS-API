const { User } = require('../models');

const searchUser = async ({ email, password }) => {
    const userExist = await User.findOne({ where: { email, password } });
    return userExist;
};

module.exports = {
  searchUser,
};