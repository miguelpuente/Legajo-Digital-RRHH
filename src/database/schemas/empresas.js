exports.uuid = {
  id: {
    isUUID: { errorMessage: 'id no es UUID' },
    exists: {
      errorMessage: 'Falta id',
    },
  }
}

exports.empresa = {
  nombre: {
    isString: { errorMessage: 'Nombre no es string' },
    exists: {
      errorMessage: 'Falta Nombre',
    },
  },
  cuit: {
    isString: { errorMessage: 'Cuit no es string' },
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
    isBoolean: { errorMessage: 'avatar no es boolean' },
    optional: { nullable: true, checkFalsy: true },
  },
}
