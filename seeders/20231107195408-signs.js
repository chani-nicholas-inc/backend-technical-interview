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
        planet_id: plutoId,
        element_id: fireId,
        modality_id: introvertedId,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Ipsum',
        planet_id: plutoId,
        element_id: fireId,
        modality_id: introvertedId,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Persimon',
        planet_id: plutoId,
        element_id: fireId,
        modality_id: introvertedId,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Jezebel',
        planet_id: plutoId,
        element_id: fireId,
        modality_id: introvertedId,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Refrigerator',
        planet_id: plutoId,
        element_id: fireId,
        modality_id: introvertedId,
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sign', null, {});
  }
};
