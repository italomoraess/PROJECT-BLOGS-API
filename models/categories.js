module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Category', {
    name: DataTypes.STRING,
  }, { timestamps: false });
  
  Categories.associate = (models) => {
    Categories.hasMany(models.PostsCategories,
      { foreignKey: 'categoryId', as: 'categoryId' }); 
 };
  return Categories;
};