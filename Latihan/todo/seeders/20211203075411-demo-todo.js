'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('todos', [{
       title : "Mencuci pakaian",
       description : "Mencuci pakaian kemarin dengan menggunakan pengharum",
       status: false,
       startTime: new Date(),
       createdAt : new Date(),
       updatedAt : new Date()
     },
    {
      title : "Mencuci piring",
      description : "Mencuci piring kemarin dengan menggunakan sunlight",
      status: false,
      startTime: new Date(),
      createdAt : new Date(),
      updatedAt : new Date()
    }], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('todos', null, {})
  }
};
