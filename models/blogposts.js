module.exports = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
    },
    published: DataTypes.STRING,
    updated: DataTypes.STRING,
  }, { timestamps: false });

  BlogPosts.associate = (models) => {
    BlogPosts.belongsTo(models.Users,
      { foreignKey: 'userId', as: 'userId' });
    BlogPosts.hasMany(models.PostsCategories,
      { foreignKey: 'postId', as: 'postId' });
  };
  return BlogPosts;
};