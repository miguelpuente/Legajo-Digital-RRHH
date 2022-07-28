'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Datos_Laboral extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Datos_Laboral.init({
    colaborador_id: DataTypes.UUID,
    nro_legajo: DataTypes.INTEGER,
    fecha_ingreso: DataTypes.DATE,
    telefono: DataTypes.STRING,
    email: DataTypes.STRING,
    fecha_inactividad: DataTypes.DATE,
    motivo_inactividad_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Datos_Laboral',
    timestamps: true,
    paranoid: true
  });
  return Datos_Laboral;
};