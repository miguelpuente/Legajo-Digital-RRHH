'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Areas', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUID
      },
      empresa_id: {
        type: Sequelize.UUID,
        references: {
          model: "empresas",
          key: "id"
        }
      },
      nombre: {
        type: Sequelize.STRING
      },
      activo: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
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
    await queryInterface.dropTable('Areas');
  }
}
