'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
	class Users extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
		Users.hasMany(models.Materias,{as:"tareas", foreignKey:"createdBy"});
		}
	}
	Users.init({
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			
		},
		notes: { 
			type: DataTypes.STRING,
			
		},
	}, {
		defaultScope: {
			order: [['id', 'ASC']]
		},
		sequelize,
		underscored: true,
		modelName: 'Users'
	});
	return Users;
};