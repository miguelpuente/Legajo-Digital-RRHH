exports.uuid = {
  id: {
    isUUID: { errorMessage: 'id no es UUID' },
    exists: {
      errorMessage: 'Falta id',
    },
  }
}

exports.reemplazo = {
  colaborador_id: {
    isUUID: { errorMessage: 'colaborador_id no es UUID' },
    exists: {
      errorMessage: 'Falta colaborador_id',
    },
  },
  puesto_colaborador_id: {
    isUUID: { errorMessage: 'puesto_colaborador_id no es UUID' },
    exists: {
      errorMessage: 'puesto_colaborador_id',
    },
  }
}
