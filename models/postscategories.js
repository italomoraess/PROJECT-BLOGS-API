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
    models.Category.belongsToMany(models.BlogPost,
    { foreignKey: 'postId', as: 'postId', through: PostsCategories, otherKey: 'categoryId' });
    models.BlogPost.belongsToMany(models.Category,
    { foreignKey: 'categoryId', as: 'categoryId', through: PostsCategories, otherKey: 'postId' });  
 };
  return PostsCategories;
};