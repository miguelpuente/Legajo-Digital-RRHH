exports.uuid = {
  id: {
    isUUID: { errorMessage: 'id no es UUID' },
    exists: {
      errorMessage: 'Falta id',
    },
  }
}

exports.familiar = {
  colaborador_id: {
    isUUID: { errorMessage: 'colaborador_id no es UUID' },
    exists: {
      errorMessage: 'Falta colaborador_id',
    },
  },
  relacion_familiar_id: {
    isUUID: { errorMessage: 'relacion_familiar_id no es UUID' },
    exists: {
      errorMessage: 'Falta relacion_familiar_id',
    },
  },
  sexo_id: {
    isUUID: { errorMessage: 'sexo_id no es UUID' },
    exists: {
      errorMessage: 'Falta sexo_id',
    },
  },
  nombre: {
    isString: { errorMessage: 'Nombre no es string' },
    exists: {
      errorMessage: 'Falta nombre',
    },
  },
  apellido: {
    isString: { errorMessage: 'Apellido no es string' },
    exists: {
      errorMessage: 'Falta apellido',
    },
  },
  telefono: {
    isString: { errorMessage: 'telefono no es string' },
    exists: {
      errorMessage: 'Falta telefono',
    },
  },
  email: {
    isEmail: { errorMessage: 'email no es string' },
    optional: { nullable: true, checkFalsy: true },
  },
  activo: {
    isBoolean: { errorMessage: 'activo no es boolean' },
    optional: { nullable: true, checkFalsy: true },
  },
}
