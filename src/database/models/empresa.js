'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Empresa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany( models.Sindicato, { through: 'rrhh_empresas_sindicatos', foreignKey: 'empresa_id' })
      this.hasOne( models.Domicilio, { as: 'domicilio', foreignKey: 'relacion_id', constraints: false, scope: { relacion_type: 'empresas'}})
      this.hasMany( models.Area, { as: 'areas', foreignKey:'empresa_id' })
      this.hasMany( models.Sucursal, { as: 'sucursales', foreignKey: 'empresa_id' })
      this.hasMany( models.Sector, { as: 'sectores', foreignKey:'empresa_id' })
      this.hasMany( models.Puesto, { as: 'puestos', foreignKey:'empresa_id' })
      this.hasMany( models.Empresas_Sindicato, {foreignKey:'empresa_id' })
    }
  }
  Empresa.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    nombre: DataTypes.STRING,
    cuit: DataTypes.STRING,
    telefono: DataTypes.STRING,
    email: DataTypes.STRING,
    activo: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'Empresa',
    timestamps: true,
    paranoid: true
  })
  return Empresa
}
