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
      Colaborador_Puesto.belongsTo(models.Colaborador, { as:'colaborador', foreignKey: 'colaborador_id' });
      Colaborador_Puesto.belongsTo(models.Puesto, { as: 'puesto', foreignKey: 'puesto_id' });
      Colaborador_Puesto.hasMany( models.Reemplazo, { as: 'reemplazo', foreignKey: 'puesto_colaborador_id' } )
    }
  }
  Colaborador_Puesto.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    colaborador_id: DataTypes.UUID,
    puesto_id: DataTypes.UUID,
    fecha_inicio: DataTypes.DATEONLY,
    fecha_fin: DataTypes.DATEONLY,
    activo: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'Colaborador_Puesto',
    tableName: 'RRHH_Colaborador_Puestos',
    timestamps: true,
    paranoid: true
  });
  return Colaborador_Puesto;
}
