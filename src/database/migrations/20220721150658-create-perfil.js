'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Perfils', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      codigo: {
        type: Sequelize.STRING
      },
      nombre: {
        type: Sequelize.STRING
      },
      apellido: {
        type: Sequelize.STRING
      },
      fecha_nacimiento: {
        type: Sequelize.DATE
      },
      numero_documento: {
        type: Sequelize.STRING
      },
      numero_cuil: {
        type: Sequelize.STRING
      },
      numero_telefono: {
        type: Sequelize.STRING
      },
      numero_celular: {
        type: Sequelize.STRING
      },
      email_personal: {
        type: Sequelize.STRING
      },
      email_empresa: {
        type: Sequelize.STRING
      },
      fecha_ingreso: {
        type: Sequelize.DATE
      },
      avatar_rrhh: {
        type: Sequelize.STRING
      },
      avatar_usuario: {
        type: Sequelize.STRING
      },
      supervisor_id: {
        type: Sequelize.INTEGER
      },
      activo: {
        type: Sequelize.BOOLEAN
      },
      fecha_inactividad: {
        type: Sequelize.DATE
      },
      inactividad_motivo_id: {
        type: Sequelize.INTEGER
      },
      sexo_id: {
        type: Sequelize.INTEGER
      },
      estadocivil_id: {
        type: Sequelize.INTEGER
      },
      sucursal_id: {
        type: Sequelize.INTEGER
      },
      area_id: {
        type: Sequelize.INTEGER
      },
      sector_id: {
        type: Sequelize.INTEGER
      },
      categoria_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Perfils');
  }
};