'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Relaciones_Familiar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Relaciones_Familiar.init({
    nombre: DataTypes.STRING,
    activo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Relaciones_Familiar',
    timestamps: true,
    paranoid: true
  });
  return Relaciones_Familiar;
};