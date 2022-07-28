'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sector extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Sector.init({
    empresa_id: DataTypes.UUID,
    nombre: DataTypes.STRING,
    activo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Sector',
    timestamps: true,
    paranoid: true
  });
  return Sector;
};