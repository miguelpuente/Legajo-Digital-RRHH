exports.uuid = {
  id: {
    isUUID: { errorMessage: 'id no es UUID' },
    exists: {
      errorMessage: 'Falta id',
    },
  }
}

exports.categoria = {
  sindicato_id: {
    isUUID: { errorMessage: 'sindicato_id no es UUID' },
    exists: {
      errorMessage: 'Falta sindicato_id',
    },
  },
  nombre: {
    isString: { errorMessage: 'Nombre no es string' },
    exists: {
      errorMessage: 'Falta nombre',
    },
  },
  activo: {
    isBoolean: { errorMessage: 'activo no es boolean' },
    optional: { nullable: true, checkFalsy: true },
  },
}
  