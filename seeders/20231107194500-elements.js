'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('element', [
      {
        name: 'fire',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'earth',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'air',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'water',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('element', null, {});
  }
};
