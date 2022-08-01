'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Empresas_Sindicato extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Empresas_Sindicato.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    empresa_id: DataTypes.UUID,
    sindicato_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Empresas_Sindicato',
    tableName: 'RRHH_Empresas_Sindicatos',
    timestamps: true,
    paranoid: true
  });
  return Empresas_Sindicato;
};