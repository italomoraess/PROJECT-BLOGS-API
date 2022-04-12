module.exports = (sequelize, DataTypes) => {
  const PostsCategories = sequelize.define('PostsCategory', {
    postId: {
      type: DataTypes.INTEGER,
    },
    categoryId: {
      type: DataTypes.INTEGER,
    }, 
  }, { timestamps: false });

  PostsCategories.associate = (models) => {
    PostsCategories.belongsToMany(models.BlogPosts,
      { foreignKey: 'postId', as: 'postId' });
    PostsCategories.belongsToMany(models.Categories,
    { foreignKey: 'categoryId', as: 'categoryId' });  
 };
  return PostsCategories;
};