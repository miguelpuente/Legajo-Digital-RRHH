exports.uuid = {
  id: {
    isUUID: { errorMessage: 'id no es UUID' },
    exists: {
      errorMessage: 'Falta id',
    },
  }
}

exports.puesto = {
  empresa_id: {
    isUUID: { errorMessage: 'EmpresaId no es UUID' },
    exists: {
      errorMessage: 'Falta EmpresaId',
    },
  },
  nombre: {
    isString: { errorMessage: 'Nombre no es string' },
    exists: {
      errorMessage: 'Falta nombre',
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
