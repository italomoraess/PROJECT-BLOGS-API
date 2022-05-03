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
    BlogPosts.belongsTo(models.User,
      { foreignKey: 'userId', as: 'Users' });
    BlogPosts.hasMany(models.PostsCategory,
      { foreignKey: 'postId', as: 'postId' });
  };
  return BlogPosts;
};