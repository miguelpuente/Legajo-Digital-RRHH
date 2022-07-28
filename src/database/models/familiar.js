'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Familiar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Familiar.init({
    colaborador_id: DataTypes.UUID,
    relacion_familiar_id: DataTypes.UUID,
    sexo_id: DataTypes.UUID,
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    telefono: DataTypes.STRING,
    email: DataTypes.STRING,
    activo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Familiar',
    timestamps: true,
    paranoid: true
  });
  return Familiar;
};