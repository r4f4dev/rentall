'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.sequelize.query('UPDATE SiteSettings SET type = "config_settings" WHERE name IN ("stripePublishableKey", "maxUploadSize");'),
    ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.sequelize.query('UPDATE SiteSettings SET type = "site_settings" WHERE name IN ("stripePublishableKey", "maxUploadSize");'),
    ])
  }
};
