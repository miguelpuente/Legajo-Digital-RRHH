'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Motivos_Inactividad extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Motivos_Inactividad.init({
    nombre: DataTypes.STRING,
    observaciones: DataTypes.TEXT,
    activo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Motivos_Inactividad',
    timestamps: true,
    paranoid: true
  });
  return Motivos_Inactividad;
};