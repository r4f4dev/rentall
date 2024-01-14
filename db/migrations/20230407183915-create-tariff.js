"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Tariffs", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      host_commision: {
        type: Sequelize.INTEGER,
      },
      guest_commision: {
        type: Sequelize.INTEGER,
      },
      host_is_percent: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
      guest_is_percent: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
      is_only_commission: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Tariffs");
  },
};
