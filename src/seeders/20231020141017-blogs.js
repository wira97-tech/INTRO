'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('blogs', [{
       title: 'Hai Cantik',
       startDate: new Date(),
       endDate: new Date(),
       content: 'welcome to the jungle',
       technologies: ['nodeJs','reactJs','java','php'],
       image: "image.png",
       createdAt: new Date(),
       updatedAt: new Date()

      }], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {});
    
  }
};
