'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.addColumn(
      'todo', //Nama tabel tujuan yg mau ditambah
      'createdBy', //Nama kolom yg mau ditambahkan
      {
        type : Sequelize.INTEGER,
        references : {
          modelName : 'todos',
          key : 'id' 
        },
        allowNull : false,
        foreignKey : true
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      
    )
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
