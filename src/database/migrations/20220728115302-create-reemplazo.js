'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reemplazos', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUID
      },
      colaborador_id: {
        type: Sequelize.UUID,
        references: {
          model: "Colaboradores",
          key: "id"
        }
      },
      puesto_colaborador_id: {
        type: Sequelize.UUID,
        references: {
          model: "Colaborador_Puestos",
          key: "id"
        }
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
    await queryInterface.dropTable('Reemplazos');
  }
};