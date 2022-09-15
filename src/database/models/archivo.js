'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Archivo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Archivo.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    relacion_id: DataTypes.UUID,
    relacion_type: DataTypes.STRING,
    nombre_DB: DataTypes.STRING,
    nombre_User: DataTypes.STRING,
    extension: DataTypes.STRING,
    ruta: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    observacion: DataTypes.STRING,
    activo: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'Archivo',
    timestamps: true,
    paranoid: true
  })
  return Archivo
}