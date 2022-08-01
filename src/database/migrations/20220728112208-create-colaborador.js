'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RRHH_Colaboradores', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      user_id: {
        type: Sequelize.UUID,
        references: {
          model: "Users",
          key: "id"
        }
      },
      sucursal_id: {
        type: Sequelize.UUID,
        references: {
          model: "Sucursales",
          key: "id"
        }
      },
      sector_id: {
        type: Sequelize.UUID,
        references: {
          model: "RRHH_Sectores",
          key: "id"
        }
      },
      area_id: {
        type: Sequelize.UUID,
        references: {
          model: "RRHH_Areas",
          key: "id"
        }
      },
      superior_id: {
        type: Sequelize.UUID,
        references: {
          model: "RRHH_Colaboradores",
          key: "id"
        }
      },
      categoria_id: {
        type: Sequelize.UUID,
        references: {
          model: "RRHH_Categorias",
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
      estado_civil_id: {
        type: Sequelize.UUID,
        references: {
          model: "RRHH_Estados_Civiles",
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('RRHH_Colaboradores');
  }
}