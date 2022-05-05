'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('materias', [
			{ asignature: "POO", name: "Actividad 1", description:"Realizar un diagrama de clases", created_by:1 },
      { asignature: "Estructuras", name: "Actividad 1", description:"investigar sobre recursion", created_by:1 },
		
		], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('materias', null, {});
    
  }
};
