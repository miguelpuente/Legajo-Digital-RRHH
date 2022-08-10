exports.uuid = {
  id: {
    isUUID: { errorMessage: 'id no es UUID' },
    exists: {
      errorMessage: 'Falta id',
    },
  }
}

exports.dato_laboral = {
  colaborador_id: {
    isUUID: { errorMessage: 'colaborador_id no es UUID' },
    exists: {
      errorMessage: 'Falta colaborador_id',
    },
  },
  nro_legajo: {
    isInt: { errorMessage: 'nro_legajo no es integer' },
    exists: {
        errorMessage: 'Falta nro_legajo',
    },
  },
  fecha_ingreso: {
    isDate: { errorMessage: 'fecha_ingreso no es date' },
    exists: {
        errorMessage: 'Falta fecha_ingreso',
    },
  },
  telefono: {
    isString: { errorMessage: 'telefono no es string' },
    optional: { nullable: true, checkFalsy: true },
  },
  email: {
    isEmail: { errorMessage: 'email no es email' },
    optional: { nullable: true, checkFalsy: true },
  },
}

exports.dato_laboral_baja = {
  motivo_inactividad_id: {
    isUUID: { errorMessage: 'motivo_inactividad_id no es UUID' },
    exists: {
      errorMessage: 'Falta motivo_inactividad_id',
    },
  },
  fecha_inactividad: {
    isDate: { errorMessage: 'fecha_inactividad no es Date' },
    exists: {
      errorMessage: 'Falta fecha_inactividad',
    },
  },
}
