'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Colaborador_licencia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Colaborador_licencia.init({
    colaborador_id: DataTypes.UUID,
    licencia_tipo: DataTypes.UUID,
    fecha_pedido: DataTypes.DATE,
    fecha_inicio: DataTypes.DATE,
    fecha_fin: DataTypes.DATE,
    fecha_incorporacion: DataTypes.DATE,
    completado: DataTypes.BOOLEAN,
    observaciones: DataTypes.TEXT,
    activo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Colaborador_licencia',
    timestamps: true,
    paranoid: true
  });
  return Colaborador_licencia;
};