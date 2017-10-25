'use strict';
module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define('Product', {
    title: DataTypes.STRING,
    quantity: DataTypes.STRING,
    price: DataTypes.STRING,
    category: DataTypes.STRING,
  }, {timestamps: false});

  Product.associate = function(models) {
    Product.belongsTo(models.Category, {
      foreignKey: 'categoryId',
      onDelete: 'CASCADE'
    });
  };

  return Product;
};