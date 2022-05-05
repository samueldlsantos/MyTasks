'use strict';

module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.createTable('users', {
			id: {
				type: Sequelize.INTEGER(11).UNSIGNED,
				primaryKey: true,
				autoIncrement: true
			},
			email: {
				type: Sequelize.STRING(255),
				unique: true,
				allowNull: false
			},
			password: {
				type: Sequelize.STRING(255),
				allowNull: false
			},
			notes: {
				type: Sequelize.STRING(1024),
				allowNull: true
			},
			created_at: {
				type: Sequelize.DATE,
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
				allowNull: false
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: true
			}
		});
	},

	async down (queryInterface, Sequelize) {
		await queryInterface.dropTable('users');
	}
};
