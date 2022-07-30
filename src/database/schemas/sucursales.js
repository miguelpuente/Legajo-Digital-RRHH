exports.uuid = {
  id: {
    isUUID: { errorMessage: 'id no es UUID' },
    exists: {
      errorMessage: 'Falta id',
    },
  }
}

exports.sucursal = {
  empresa_id: {
    isUUID: { errorMessage: 'EmpresaId no es UUID' },
    exists: {
      errorMessage: 'Falta Nombre',
    },
  },
  nombre: {
    isString: { errorMessage: 'Nombre no es string' },
    exists: {
      errorMessage: 'Falta CUIT',
    },
  },
  telefono: {
    isString: { errorMessage: 'Telefono no es string' },
  },
  email: {
    isEmail: { errorMessage: 'Email no válido' },
    exists: {
      errorMessage: 'Falta Email',
    },
  },
  activo: {
    isBoolean: { errorMessage: 'activo no es boolean' },
    optional: { nullable: true, checkFalsy: true },
  },
}
