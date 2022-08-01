'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Puesto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo( models.Empresa , { as: 'empresa', foreignKey: 'empresa_id' });
      this.hasMany( models.Colaborador_Puesto , { as: 'colaborador_puestos', foreignKey: 'puesto_id' });
    }
  }
  Puesto.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    empresa_id: DataTypes.UUID,
    nombre: DataTypes.STRING,
    observaciones: DataTypes.TEXT,
    activo: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'Puesto',
    tableName: 'RRHH_Puestos',
    timestamps: true,
    paranoid: true
  });
  return Puesto;
};