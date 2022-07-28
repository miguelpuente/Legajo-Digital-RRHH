'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Datos_Laborales', {
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
      motivo_inactividad_id: {
        type: Sequelize.UUID,
        references: {
          model: "Motivos_Inactividades",
          key: "id"
        }
      },
      nro_legajo: {
        type: Sequelize.INTEGER
      },
      fecha_ingreso: {
        type: Sequelize.DATE
      },
      telefono: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      fecha_inactividad: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Datos_Laborales');
  }
};