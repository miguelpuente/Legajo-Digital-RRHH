'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Colaborador extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Colaborador.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    user_id: DataTypes.UUID,
    sucursal_id: DataTypes.UUID,
    sector_id: DataTypes.UUID,
    area_id: DataTypes.UUID,
    superior_id: DataTypes.UUID,
    categoria_id: DataTypes.UUID,
    sexo_id: DataTypes.UUID,
    estado_civil_id: DataTypes.UUID,
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    telefono: DataTypes.STRING,
    email: DataTypes.STRING,
    activo: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'Colaborador',
    timestamps: true,
    paranoid: true
  });
  return Colaborador;
};