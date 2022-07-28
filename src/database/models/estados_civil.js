'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Estados_Civil extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Estados_Civil.init({
    nombre: DataTypes.STRING,
    activo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Estados_Civil',
    timestamps: true,
    paranoid: true
  });
  return Estados_Civil;
};