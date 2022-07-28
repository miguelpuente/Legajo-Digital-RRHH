'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUID
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      avatar: {
        type: Sequelize.STRING,
        allowNull: true
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
    await queryInterface.dropTable('Users');
  }
};