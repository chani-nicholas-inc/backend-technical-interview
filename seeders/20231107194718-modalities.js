'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('modality', [
      {
        name: 'cardinal',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'fixed',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'mutable',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'introverted',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('modality', null, {});
  }
};
