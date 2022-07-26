'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Localidad extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Localidad.init({
    provincia_id: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    codigopostal: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Localidad',
    timestamps: true,
    paranoid: true
  });
  return Localidad;
};