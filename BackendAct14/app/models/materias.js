'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Materias extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
     Materias.belongsTo(models.Users, {as:"users", foreignKey:"createdBy"});

    }
  }
  Materias.init({
    asignature: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    fechaEntrega: DataTypes.STRING,
    createdBy: DataTypes.STRING
  }, {
    sequelize,
		underscored: true,
		modelName: 'Materias'
  });
  return Materias;
};