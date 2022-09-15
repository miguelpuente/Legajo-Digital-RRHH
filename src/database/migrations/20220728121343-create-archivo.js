'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Archivos', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      relacionId: {
        field: 'relacion_id',
        type: Sequelize.UUID,
        references: null
      },
      relacionType: {
        field: 'relacion_type',
        type: Sequelize.STRING,
      },
      nombre_DB: {
        type: Sequelize.STRING
      },
      nombre_User: {
        type: Sequelize.STRING
      },
      extension: {
        type: Sequelize.STRING
      },
      ruta: {
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.STRING
      },
      observacion: {
        type: Sequelize.STRING
      },
      activo: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
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
    await queryInterface.dropTable('Archivos');
  }
};