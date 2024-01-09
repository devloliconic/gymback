"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("admins", "firstName", Sequelize.STRING);
    await queryInterface.addColumn("admins", "lastName", Sequelize.STRING);
    await queryInterface.addColumn("admins", "middleName", Sequelize.STRING);
    await queryInterface.addColumn("admins", "coast", Sequelize.INTEGER);
    await queryInterface.addColumn("admins", "gym_id", Sequelize.INTEGER);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("admins", "firstName", Sequelize.STRING);
    await queryInterface.removeColumn("admins", "lastName", Sequelize.STRING);
    await queryInterface.removeColumn("admins", "middleName", Sequelize.STRING);
    await queryInterface.removeColumn("admins", "coast", Sequelize.INTEGER);
    await queryInterface.removeColumn("admins", "gym_id", Sequelize.INTEGER);
  },
};
