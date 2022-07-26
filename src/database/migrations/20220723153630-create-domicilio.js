'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Domicilios', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      relacion_id: {
        type: Sequelize.UUID
      },
      relacion_type: {
        type: Sequelize.STRING
      },
      calle: {
        type: Sequelize.STRING
      },
      numero: {
        type: Sequelize.INTEGER
      },
      departamento: {
        type: Sequelize.STRING
      },
      piso: {
        type: Sequelize.STRING
      },
      barrio_id: {
        type: Sequelize.UUID,
          references: {
            model: 'Barrios',
            key: 'id',
          },
        allowNull: false,
      },
      entre_calle_uno: {
        type: Sequelize.STRING
      },
      altura_calle_uno: {
        type: Sequelize.INTEGER
      },
      entre_calle_dos: {
        type: Sequelize.STRING
      },
      altura_calle_dos: {
        type: Sequelize.INTEGER
      },
      localidad_id: {
        type: Sequelize.UUID,
          references: {
            model: 'Localidades',
            key: 'id',
          },
          allowNull: false,
      },
      observaciones: {
        type: Sequelize.TEXT
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
