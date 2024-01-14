"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Listing", "tariff_id", {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: "Tariffs",
        key: "id",
      },
    });
  },

  down: (queryInterface, Sequelize) => {},
};
