"use strict";
module.exports = (sequelize, DataTypes) => {
  const Tariffs = sequelize.define(
    "Tariffs",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      host_commision: DataTypes.INTEGER,
      guest_commision: DataTypes.INTEGER,
      host_is_percent: DataTypes.INTEGER,
      guest_is_percent: DataTypes.INTEGER,
      is_only_commission: DataTypes.INTEGER,
    },
    {}
  );
  Tariffs.associate = function(models) {
    // associations can be defined here
  };
  return Tariffs;
};
