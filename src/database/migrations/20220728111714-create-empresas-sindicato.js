'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RRHH_Empresas_Sindicatos', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      empresa_id: {
        type: Sequelize.UUID,
        references: {
          model: "Empresas",
          key: "id"
        }
      },
      sindicato_id: {
        type: Sequelize.UUID,
        references: {
          model: "RRHH_Sindicatos",
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
    await queryInterface.dropTable('RRHH_Empresas_Sindicatos');
  }
};