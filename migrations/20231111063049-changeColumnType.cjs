"use strict";

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("coaches", "lastName", {
      type: Sequelize.STRING,
    });
    await queryInterface.changeColumn("coaches", "middleName", {
      type: Sequelize.STRING,
    });
    return;
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("coaches", "lastName", {
      type: Sequelize.INTEGER, // Возврат к предыдущему типу данных
    });

    await queryInterface.changeColumn("coaches", "middleName", {
      type: Sequelize.INTEGER, // Возврат к предыдущему типу данных
    });

    return;
  },
};
