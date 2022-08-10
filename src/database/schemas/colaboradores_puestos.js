exports.uuid = {
  id: {
    isUUID: { errorMessage: 'id no es UUID' },
    exists: {
        errorMessage: 'Falta id',
    },
  }
}
  
exports.colaborador_puesto = {
  colaborador_id: {
    isUUID: { errorMessage: 'colaborador_id no es UUID' },
    exists: {
      errorMessage: 'Falta colaborador_id',
    },
  },
  puesto_id: {
    isUUID: { errorMessage: 'puesto_id no es UUID' },
    exists: {
      errorMessage: 'Falta puesto_id',
    },
  },
  fecha_inicio: {
    isDate: { errorMessage: 'fecha_inicio no es fecha' },
    exists: {
      errorMessage: 'Falta fecha_inicio',
    },
  },
  fecha_fin: {
    isDate: { errorMessage: 'fecha_fin no es fecha' },
    optional: { nullable: true, checkFalsy: true },
  },
  activo: {
    isBoolean: { errorMessage: 'activo no es boolean' },
    optional: { nullable: true, checkFalsy: true },
  },
}
