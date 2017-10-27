'use strict';
module.exports = (sequelize, DataTypes) => {
  var Payment = sequelize.define('Payment', {
    userId: DataTypes.INTEGER,
    cardNickname: DataTypes.STRING,
    cardNumber: DataTypes.INTEGER
  }, {timestamps: false});
  
  Payment.associate = function(models) {
    Payment.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
  };

  Payment.associate = function(models) {
    Payment.hasMany(models.Order, {
      foreignKey: "paymentId"
    });
  };

  return Payment;
};