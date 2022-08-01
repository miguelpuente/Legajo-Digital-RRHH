'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RRHH_Reemplazos', {
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
      puesto_colaborador_id: {
        type: Sequelize.UUID,
        references: {
          model: "RRHH_Colaborador_Puestos",
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
    await queryInterface.dropTable('RRHH_Reemplazos');
  }
};