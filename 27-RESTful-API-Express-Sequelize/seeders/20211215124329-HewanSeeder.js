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

    await queryInterface.bulkInsert('hewans', [
      {
        id:1,
        nama: "miaw",
        namaSpesies: "kucing",
        umur: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:2,
        nama: "lalalili",
        namaSpesies: "hamster",
        umur: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:3,
        nama: "ulalala",
        namaSpesies: "anjing",
        umur: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('hewans', null, {})
  }
};
