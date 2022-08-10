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
      Datos_Laboral.belongsTo( models.Motivos_Inactividad ,{ as: 'baja', foreignKey: 'motivo_inactividad_id' })
      Datos_Laboral.belongsTo( models.Colaborador ,{ as: 'colaborador', foreignKey: 'colaborador_id' })
    }
  }
  Datos_Laboral.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    colaborador_id: DataTypes.UUID,
    nro_legajo: DataTypes.INTEGER,
    fecha_ingreso: DataTypes.DATEONLY,
    telefono: DataTypes.STRING,
    email: DataTypes.STRING,
    fecha_inactividad: DataTypes.DATEONLY,
    motivo_inactividad_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Datos_Laboral',
    tableName: 'RRHH_Datos_Laborales',
    timestamps: true,
    paranoid: true
  });
  return Datos_Laboral;
}
