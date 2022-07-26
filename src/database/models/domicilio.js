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
    departamento: DataTypes.STRING,
    piso: DataTypes.STRING,
    barrio_id: DataTypes.UUID,
    entre_calle_uno: DataTypes.STRING,
    altura_calle_uno: DataTypes.INTEGER,
    entre_calle_dos: DataTypes.STRING,
    altura_calle_dos: DataTypes.INTEGER,
    localidad_id: DataTypes.UUID,
    observaciones: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Domicilio',
    timestamps: true,
    paranoid: true,
  });
  return Domicilio;
};