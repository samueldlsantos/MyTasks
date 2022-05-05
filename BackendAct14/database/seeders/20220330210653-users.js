'use strict';
const bcrypt = require('bcrypt');

module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.bulkInsert('users', [
			{ email: "user@example.com", password: bcrypt.hashSync("secret", 10) },
			{ email: "user2.cmd@gmail.com", password: bcrypt.hashSync("secret", 10)}
		], {});
	},

	async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete('users', null, {});
	}
};
