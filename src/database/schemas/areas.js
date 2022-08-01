exports.uuid = {
  id: {
    isUUID: { errorMessage: 'id no es UUID' },
    exists: {
      errorMessage: 'Falta id',
    },
  }
}

exports.area = {
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
    activo: {
      isBoolean: { errorMessage: 'activo no es boolean' },
      optional: { nullable: true, checkFalsy: true },
    },
  }
  