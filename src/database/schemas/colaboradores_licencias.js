exports.uuid = {
  id: {
    isUUID: { errorMessage: 'id no es UUID' },
    exists: {
        errorMessage: 'Falta id',
    },
  }
}

exports.colaborador_licencia = {
  colaborador_id: {
    isUUID: { errorMessage: 'colaborador_id no es UUID' },
      exists: {
    errorMessage: 'Falta colaborador_id',
    },
  },
  licencia_tipo_id: {
    isUUID: { errorMessage: 'licencia_tipo_id no es UUID' },
      exists: {
    errorMessage: 'Falta licencia_tipo_id',
    },
  },
  fecha_pedido: {
    isDate: { errorMessage: 'fecha_pedido no es fecha' },
      exists: {
    errorMessage: 'Falta fecha_pedido',
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
    exists: {
      errorMessage: 'Falta fecha_fin',
    },
  },
  fecha_incorporacion: {
    isDate: { errorMessage: 'fecha_incorporacion no es fecha' },
    exists: {
      errorMessage: 'Falta fecha_incorporacion',
    },
  },
  completado: {
    isBoolean: { errorMessage: 'completado no es boolean' },
    optional: { nullable: true, checkFalsy: true },
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
  }
}
