'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('modality', [
      {
        name: 'cardinal',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'fixed',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'mutable',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'introverted',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('modality', null, {});
  }
};
