'use strict';
module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define('Product', {
    title: DataTypes.STRING,
    quantity: DataTypes.STRING,
    price: DataTypes.STRING,
    category: DataTypes.STRING
  }, {timestamps: false});

  Product.associate= (models) => {
  };

  return Product;
};