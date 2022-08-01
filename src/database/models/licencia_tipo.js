'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Licencia_tipo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Licencia_tipo.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    nombre: DataTypes.STRING,
    icono_img: DataTypes.STRING,
    icono_color: DataTypes.STRING,
    observaciones: DataTypes.TEXT,
    activo: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'Licencia_tipo',
    tableName: 'RRHH_Licencia_Tipos',
    timestamps: true,
    paranoid: true
  });
  return Licencia_tipo;
}
