'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Domicilio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Domicilio.init({
    relacion_id: DataTypes.UUID,
    relacion_type: DataTypes.STRING,
    calle: DataTypes.STRING,
    numero: DataTypes.STRING,
    entre_calle_uno: DataTypes.STRING,
    entre_calle_dos: DataTypes.STRING,
    piso: DataTypes.STRING,
    departamento: DataTypes.STRING,
    localidad_id: DataTypes.INTEGER,
    activo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Domicilio',
    timestamps: true,
    paranoid: true
  });
  return Domicilio;
};