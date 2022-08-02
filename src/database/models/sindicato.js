'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sindicato extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Sindicato.hasMany( models.Categoria, { as: 'categorias', foreignKey: 'sindicato_id' });
      Sindicato.belongsToMany( models.Empresa, { as: 'empresas', through: 'rrhh_empresas_sindicatos', foreignKey: 'sindicato_id' } )
      Sindicato.hasMany( models.Empresas_Sindicato, {foreignKey:'sindicato_id' })
    }
  }
  Sindicato.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    nombre: DataTypes.STRING,
    activo: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'Sindicato',
    tableName: 'RRHH_Sindicatos',
    timestamps: true,
    paranoid: true
  });
  return Sindicato;
};