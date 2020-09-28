'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return Promise.all([
      queryInterface.addColumn(
        'Users', // table name
        'lastname', // new field name
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
      ),
      queryInterface.addColumn(
        'Users',
        'email',
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
      ),
      queryInterface.addColumn(
        'Users',
        'phone',
        {
          type: Sequelize.TEXT,
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
      queryInterface.removeColumn('Users', 'lastname'),
    queryInterface.removeColumn('Users', 'email'),
    queryInterface.removeColumn('Users', 'phone'),

    ]);
  }
};
