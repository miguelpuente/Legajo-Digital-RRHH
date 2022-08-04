exports.uuid = {
    id: {
      isUUID: { errorMessage: 'id no es UUID' },
      exists: {
        errorMessage: 'Falta id',
      },
    }
  }
  
exports.licencia_tipo = {
  nombre: {
    isString: { errorMessage: 'Nombre no es string' },
    exists: {
    errorMessage: 'Falta nombre',
    },
  },
  icono_img: {
    isString: { errorMessage: 'icono_img no es string' },
    exists: {
      errorMessage: 'Falta icono_img',
    },
  },
  icono_color: {
    isString: { errorMessage: 'icono_color no es string' },
    exists: {
      errorMessage: 'Falta icono_color',
    },
  },
  observaciones: {
    isString: { errorMessage: 'Observaciones no es string' },
    exists: {
      errorMessage: 'Falta Observaciones',
    },
  },
  activo: {
    isBoolean: { errorMessage: 'activo no es boolean' },
      optional: { nullable: true, checkFalsy: true },
  },
}
  