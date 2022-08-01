'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reemplazo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Reemplazo.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    colaborador_id: DataTypes.UUID,
    puesto_colaborador_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Reemplazo',
    tableName: 'RRHH_Reemplazos',
    timestamps: true,
    paranoid: true
  });
  return Reemplazo;
};