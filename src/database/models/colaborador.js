'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Colaborador extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany( models.Puesto, { through: 'RRHH_Colaborador_Puestos', foreignKey: 'colaborador_id' })
      this.hasOne( models.Domicilio, { as: 'domicilio', foreignKey: 'relacion_id', constraints: false, scope: { relacion_type: 'colaboradores'}})
      this.hasMany( models.Colaborador_Puesto, { foreignKey:'colaborador_id' })
      this.belongsTo(models.Colaborador,{ as:'supervisor', foreignKey:'superior_id' })
      this.hasMany(models.Colaborador, { as:'colaboradores', foreignKey: 'superior_id' })
      this.hasMany(models.Reemplazo, { as: 'reemplazos', foreignKey: 'colaborador_id' })
      this.hasMany( models.Datos_Laboral, { as: 'datolaboral', foreignKey:'colaborador_id' })
    }
  }
  Colaborador.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    user_id: DataTypes.UUID,
    sucursal_id: DataTypes.UUID,
    sector_id: DataTypes.UUID,
    area_id: DataTypes.UUID,
    superior_id: DataTypes.UUID,
    categoria_id: DataTypes.UUID,
    sexo_id: DataTypes.UUID,
    estado_civil_id: DataTypes.UUID,
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    fecha_nacimiento: DataTypes.DATEONLY,
    cuil: DataTypes.STRING,
    telefono: DataTypes.STRING,
    email: DataTypes.STRING,
    activo: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'Colaborador',
    tableName: 'RRHH_Colaboradores',
    timestamps: true,
    paranoid: true
  });
  return Colaborador;
};