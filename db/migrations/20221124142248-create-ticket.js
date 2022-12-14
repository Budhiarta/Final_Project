'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tickets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Passanger_Name: {
        type: Sequelize.STRING
      },
      Booking_id: {
        type: Sequelize.INTEGER
      },
      Origin_Airport: {
        type: Sequelize.STRING
      },
      Destination_Airport: {
        type: Sequelize.STRING
      },
      Plane_class: {
        type: Sequelize.STRING
      },
      flight_Hours: {
        type: Sequelize.TIME
      },
      Airline_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tickets');
  }
};