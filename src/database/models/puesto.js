'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Puesto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Puesto.init({
    empresa_id: DataTypes.UUID,
    nombre: DataTypes.STRING,
    observaciones: DataTypes.TEXT,
    activo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Puesto',
    timestamps: true,
    paranoid: true
  });
  return Puesto;
};