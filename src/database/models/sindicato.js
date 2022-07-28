'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sindicato extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Sindicato.init({
    nombre: DataTypes.STRING,
    activo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Sindicato',
    timestamps: true,
    paranoid: true
  });
  return Sindicato;
};