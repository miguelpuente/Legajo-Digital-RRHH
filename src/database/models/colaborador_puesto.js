'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Colaborador_Puesto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Colaborador_Puesto.init({
    colaborador_id: DataTypes.UUID,
    puesto_id: DataTypes.UUID,
    fecha_inicio: DataTypes.DATE,
    fecha_fin: DataTypes.DATE,
    activo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Colaborador_Puesto',
    timestamps: true,
    paranoid: true
  });
  return Colaborador_Puesto;
};