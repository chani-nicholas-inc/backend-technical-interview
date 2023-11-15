'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('planet', [
      {
        name: 'Sun',
        size: 1111,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Moon',
        size: 222,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mercury',
        size: 333,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Venus',
        size: 444,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mars',
        size: 555,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jupiter',
        size: 666,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Saturn',
        size: 777,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Uranus',
        size: 888,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Neptune',
        size: 999,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pluto',
        size: 1121,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('planet', null, {});
  }
};
