"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("User", "phone", {
      type: Sequelize.STRING(20),
      allowNull: true,
    });
  },

  down: (queryInterface, Sequelize) => {},
};
