'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('materias', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      asignature: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      fecha_entrega: {
        allowNull: false,
        type: Sequelize.DATE
      },
      created_by: {
        type: Sequelize.INTEGER,
        allowNull: false,
				references: {
					model: 'users',
					key: 'id'
				},
				onUpdate: 'cascade',
				onDelete: 'cascade'
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('materias');
  }
};