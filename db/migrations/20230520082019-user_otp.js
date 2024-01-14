"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("User", "verificationCode", {
        type: Sequelize.INTEGER,
        allowNull: true,
      }),
      queryInterface.addColumn("User", "countryCode", {
        type: Sequelize.STRING(10),
        allowNull: true,
      }),
      queryInterface.addColumn("User", "codeUpdatedAt", {
        type: Sequelize.DATE,
        allowNull: true,
      }),
      queryInterface.changeColumn('User', 'password', {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: ""
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  },
};
