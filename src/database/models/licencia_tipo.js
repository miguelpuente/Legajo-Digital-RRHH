'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Licencia_tipo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Licencia_tipo.init({
    nombre: DataTypes.STRING,
    icono_img: DataTypes.STRING,
    icono_color: DataTypes.STRING,
    observaciones: DataTypes.TEXT,
    activo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Licencia_tipo',
    timestamps: true,
    paranoid: true
  });
  return Licencia_tipo;
};