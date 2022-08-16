exports.uuid = {
    id: {
      isUUID: { errorMessage: 'id no es UUID' },
      exists: {
        errorMessage: 'Falta id',
      },
    }
  }
  
exports.colaborador = {
  user_id: {
    isUUID: { errorMessage: 'user_id no es UUID' },
    optional: { nullable: true, checkFalsy: true },    
  },
  sucursal_id: {
    isUUID: { errorMessage: 'sucursal_id no es UUID' },
    exists: {
        errorMessage: 'Falta sucursal_id',
    },
  },
  sector_id: {
    isUUID: { errorMessage: 'sector_id no es UUID' },
    exists: {
        errorMessage: 'Falta sector_id',
    },
  },
  area_id: {
    isUUID: { errorMessage: 'area_id no es UUID' },
    exists: {
        errorMessage: 'Falta area_id',
    },
  },
  superior_id: {
    isUUID: { errorMessage: 'superior_id no es UUID' },
    optional: { nullable: true, checkFalsy: true },
  },
  categoria_id: {
    isUUID: { errorMessage: 'categoria_id no es UUID' },
    exists: {
        errorMessage: 'Falta categoria_id',
    },
  },
  sexo_id: {
    isUUID: { errorMessage: 'sexo_id no es UUID' },
    exists: {
        errorMessage: 'Falta sexo_id',
    },
  },
  estado_civil_id: {
    isUUID: { errorMessage: 'estado_civil_id no es UUID' },
    exists: {
        errorMessage: 'Falta estado_civil_id',
    },
  },
  nombre: {
    isString: { errorMessage: 'nombre no es string' },
    exists: {
        errorMessage: 'Falta nombre',
    },
  },
  apellido: {
    isString: { errorMessage: 'apellido no es string' },
    exists: {
        errorMessage: 'Falta apellido',
    },
  },
  fecha_nacimiento: {
    isDate: { errorMessage: 'fecha_inactividad no es Date' },
    exists: {
      errorMessage: 'Falta fecha_inactividad',
    },
  },
  cuil: {
    isString: { errorMessage: 'Cuil no es string' },
    exists: {
      errorMessage: 'Falta CUIL',
    },
  },
  telefono: {
    isString: { errorMessage: 'telefono no es string' },
    exists: {
        errorMessage: 'Falta telefono',
    },
  },
  email: {
    isEmail: { errorMessage: 'email no es email' },
    optional: { nullable: true, checkFalsy: true },
  },
  activo: {
    isBoolean: { errorMessage: 'activo no es boolean' },
    optional: { nullable: true, checkFalsy: true },
  },
}
