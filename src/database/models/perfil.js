'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Perfil extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    }
  }
  Perfil.init({
    codigo: DataTypes.STRING,
    user_id: DataTypes.UUID,
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    fecha_nacimiento: DataTypes.DATE,
    numero_documento: DataTypes.STRING,
    numero_cuil: DataTypes.STRING,
    numero_telefono: DataTypes.STRING,
    numero_celular: DataTypes.STRING,
    email_personal: DataTypes.STRING,
    email_empresa: DataTypes.STRING,
    fecha_ingreso: DataTypes.DATE,
    avatar_rrhh: DataTypes.STRING,
    supervisor_id: DataTypes.UUID,
    activo: DataTypes.BOOLEAN,
    fecha_inactividad: DataTypes.DATE,
    inactividad_motivo_id: DataTypes.UUID,
    sexo_id: DataTypes.UUID,
    estadocivil_id: DataTypes.UUID,
    sucursal_id: DataTypes.UUID,
    area_id: DataTypes.UUID,
    sector_id: DataTypes.UUID,
    categoria_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Perfil',
    timestamps: true,
    paranoid: true,
  });
  return Perfil;
}