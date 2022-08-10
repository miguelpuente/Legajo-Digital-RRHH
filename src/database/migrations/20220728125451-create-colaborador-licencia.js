'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RRHH_Colaborador_licencias', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      colaborador_id: {
        type: Sequelize.UUID,
        references: {
          model: "RRHH_Colaboradores",
          key: "id"
        }
      },
      licencia_tipo: {
        type: Sequelize.UUID,
        references: {
          model: "RRHH_Licencia_tipos",
          key: "id"
        }
      },
      fecha_pedido: {
        type: Sequelize.DATEONLY
      },
      fecha_inicio: {
        type: Sequelize.DATEONLY
      },
      fecha_fin: {
        type: Sequelize.DATEONLY
      },
      fecha_incorporacion: {
        type: Sequelize.DATEONLY
      },
      completado: {
        type: Sequelize.BOOLEAN
      },
      observaciones: {
        type: Sequelize.TEXT
      },
      activo: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('RRHH_Colaborador_licencias');
  }
};