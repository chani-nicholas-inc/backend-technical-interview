'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('element', [
      {
        name: 'fire',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'earth',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'air',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'water',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('element', null, {});
  }
};
