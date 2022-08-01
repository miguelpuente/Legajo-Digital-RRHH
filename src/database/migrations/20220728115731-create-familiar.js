'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RRHH_Familiares', {
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
      relacion_familiar_id: {
        type: Sequelize.UUID,
        references: {
          model: "RRHH_Relaciones_Familiares",
          key: "id"
        }
      },
      sexo_id: {
        type: Sequelize.UUID,
        references: {
          model: "Sexos",
          key: "id"
        }
      },
      nombre: {
        type: Sequelize.STRING
      },
      apellido: {
        type: Sequelize.STRING
      },
      telefono: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      activo: {
        type: Sequelize.BOOLEAN,
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
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('RRHH_Familiares');
  }
}
