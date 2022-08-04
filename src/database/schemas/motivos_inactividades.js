exports.uuid = {
  id: {
    isUUID: { errorMessage: 'id no es UUID' },
    exists: {
      errorMessage: 'Falta id',
    },
  }
}

exports.motivo_inactividad = {
    nombre: {
      isString: { errorMessage: 'Nombre no es string' },
      exists: {
        errorMessage: 'Falta nombre',
      },
    },
    observaciones: {
      isString: { errorMessage: 'observaciones no es string' },
      exists: {
        errorMessage: 'Falta observaciones',
      },
    },
    activo: {
      isBoolean: { errorMessage: 'activo no es boolean' },
      optional: { nullable: true, checkFalsy: true },
    },
}
  