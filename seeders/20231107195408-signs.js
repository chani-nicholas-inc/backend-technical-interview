'use strict';
const db = require('../models')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const pluto = await db.planet.findOne({ where: { name: 'Pluto' } });
    const plutoId = pluto.id;

    const fire = await db.element.findOne({ where: { name: 'fire' } });
    const fireId = fire.id;

    const introverted = await db.modality.findOne({ where: { name: 'introverted' } });
    const introvertedId = introverted.id;

    await queryInterface.bulkInsert('sign', [
      {
        name: 'Lorem',
        planetId: plutoId,
        elementId: fireId,
        modalityId: introvertedId,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ipsum',
        planetId: plutoId,
        elementId: fireId,
        modalityId: introvertedId,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Persimon',
        planetId: plutoId,
        elementId: fireId,
        modalityId: introvertedId,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jezebel',
        planetId: plutoId,
        elementId: fireId,
        modalityId: introvertedId,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Refrigerator',
        planetId: plutoId,
        elementId: fireId,
        modalityId: introvertedId,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sign', null, {});
  }
};
