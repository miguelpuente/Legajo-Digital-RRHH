'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Motivos_Inactividad extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Motivos_Inactividad.hasMany( models.Datos_Laboral, { as: 'bajas', foreignKey:'motivo_inactividad_id' })
    }
  }
  Motivos_Inactividad.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    nombre: DataTypes.STRING,
    observaciones: DataTypes.TEXT,
    activo: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'Motivos_Inactividad',
    tableName: 'RRHH_Motivos_Inactividades',
    timestamps: true,
    paranoid: true
  })
  return Motivos_Inactividad
}
