'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('planet', [
      {
        name: 'Sun',
        size: 1111,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Moon',
        size: 222,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Mercury',
        size: 333,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Venus',
        size: 444,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Mars',
        size: 555,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Jupiter',
        size: 666,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Saturn',
        size: 777,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Uranus',
        size: 888,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Neptune',
        size: 999,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Pluto',
        size: 1121,
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('planet', null, {});
  }
};
