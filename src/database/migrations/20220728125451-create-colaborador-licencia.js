'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Colaborador_licencia', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      colaborador_id: {
        type: Sequelize.UUID,
        references: {
          model: "Colaboradores",
          key: "id"
        }
      },
      licencia_tipo: {
        type: Sequelize.UUID,
        references: {
          model: "Licencia_tipos",
          key: "id"
        }
      },
      fecha_pedido: {
        type: Sequelize.DATE
      },
      fecha_inicio: {
        type: Sequelize.DATE
      },
      fecha_fin: {
        type: Sequelize.DATE
      },
      fecha_incorporacion: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Colaborador_licencia');
  }
};