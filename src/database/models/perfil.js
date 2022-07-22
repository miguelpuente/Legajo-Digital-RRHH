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
      // define association here
    }
  }
  Perfil.init({
    codigo: DataTypes.STRING,
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
    avatar_usuario: DataTypes.STRING,
    supervisor_id: DataTypes.INTEGER,
    activo: DataTypes.BOOLEAN,
    fecha_inactividad: DataTypes.DATE,
    inactividad_motivo_id: DataTypes.INTEGER,
    sexo_id: DataTypes.INTEGER,
    estadocivil_id: DataTypes.INTEGER,
    sucursal_id: DataTypes.INTEGER,
    area_id: DataTypes.INTEGER,
    sector_id: DataTypes.INTEGER,
    categoria_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Perfil',
  });
  return Perfil;
};