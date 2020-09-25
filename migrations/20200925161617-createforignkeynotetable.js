'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'notes', // table name
        'userid', // new field name
        {
          type:Sequelize.INTEGER,
          allowNull: true,
        },
      ),
     
   
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return Promise.all([
      queryInterface.removeColumn('notes', 'userid'),
    
    ]);
  }
};
