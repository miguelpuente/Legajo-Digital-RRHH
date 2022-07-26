'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RRHH_Datos_Laborales', {
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
      motivo_inactividad_id: {
        type: Sequelize.UUID,
        references: {
          model: "RRHH_Motivos_Inactividades",
          key: "id"
        }
      },
      nro_legajo: {
        type: Sequelize.INTEGER
      },
      fecha_ingreso: {
        type: Sequelize.DATEONLY
      },
      telefono: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      fecha_inactividad: {
        type: Sequelize.DATEONLY
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
    await queryInterface.dropTable('RRHH_Datos_Laborales');
  }
};