'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Domicilios', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUID
      },
      relacionId: {
        field: 'relacion_id',
        type: Sequelize.INTEGER,
        references: null
      },
      relacionType: {
        field: 'relacion_type',
        type: Sequelize.STRING,
      },
      calle: {
        type: Sequelize.STRING
      },
      numero: {
        type: Sequelize.STRING
      },
      entre_calle_uno: {
        type: Sequelize.STRING
      },
      entre_calle_dos: {
        type: Sequelize.STRING
      },
      piso: {
        type: Sequelize.STRING
      },
      departamento: {
        type: Sequelize.STRING
      },
      localidad_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Localidades",
          key: "id"
        }
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
    await queryInterface.dropTable('Domicilios');
  }
};