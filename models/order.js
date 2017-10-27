'use strict';
module.exports = (sequelize, DataTypes) => {
  var Order = sequelize.define('Order', {
    userId: DataTypes.INTEGER,
    order_date: DataTypes.DATE
  }, {timestamps: false});

  Order.associate = function(models) {
    Order.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
  };

  Order.associate = function(models) {
    Order.belongsTo(models.Payment, {
      foreignKey: 'paymentId',
      onDelete: 'CASCADE'
    });
  };

  Order.associate = function(models) {
    Order.belongsToMany(models.Product, {
      through: 'OrderProducts',
      onDelete: 'CASCADE'
    });
  };
  return Order;
};