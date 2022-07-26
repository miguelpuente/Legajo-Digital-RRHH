'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Perfiles', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true
      },
      user_id: {
        type: Sequelize.UUID,
        references: {
          model: 'users',
          key: 'id',
        }        
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
      supervisor_id: {
        type: Sequelize.UUID,
      },
      activo: {
        type: Sequelize.BOOLEAN
      },
      fecha_inactividad: {
        type: Sequelize.DATE
      },
      inactividad_motivo_id: {
        type: Sequelize.UUID,
      },
      sexo_id: {
        type: Sequelize.UUID,
      },
      estadocivil_id: {
        type: Sequelize.UUID,
      },
      sucursal_id: {
        type: Sequelize.UUID,
      },
      area_id: {
        type: Sequelize.UUID,
      },
      sector_id: {
        type: Sequelize.UUID,
      },
      categoria_id: {
        type: Sequelize.UUID,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Perfiles');
  }
}
