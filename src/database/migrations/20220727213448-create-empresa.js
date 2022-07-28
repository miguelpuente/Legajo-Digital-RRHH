'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Empresas', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUID
      },
      nombre: {
        type: Sequelize.STRING
      },
      cuit: {
        type: Sequelize.STRING
      },
      telefono: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Empresas');
  }
};