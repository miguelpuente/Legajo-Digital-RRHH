'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Sucursal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo( models.Empresa, { as: 'empresa', foreignKey: 'empresa_id' })
      this.hasOne( models.Domicilio, { as: 'domicilio', foreignKey: 'relacion_id', constraints: false, scope: { relacion_type: 'sucursales'}})
    }
  }
  Sucursal.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    empresa_id: DataTypes.UUID,
    nombre: DataTypes.STRING,
    telefono: DataTypes.STRING,
    email: DataTypes.STRING,
    activo: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'Sucursal',
    tableName: 'sucursales',
    timestamps: true,
    paranoid: true
  })
  return Sucursal
}
