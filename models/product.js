'use strict';
module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define('Product', {
    title: DataTypes.STRING,
    quantity: DataTypes.STRING,
    price: DataTypes.STRING,
    category: DataTypes.STRING,
    date_added: DataTypes.DATE
  }, {timestamps: false});

  Product.associate = function(models) {
    Product.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
  };

  Product.associate = function(models) {
    Product.belongsTo(models.Category, {
      foreignKey: 'categoryId',
      onDelete: 'CASCADE'
    });
  };

  Product.associate = function(models) {
    Product.belongsToMany(models.Order, {
      through: 'OrderProducts',
      onDelete: 'CASCADE'
    });
  };

  return Product;
};