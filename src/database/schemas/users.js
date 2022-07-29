exports.uuid = {
  id: {
    isUUID: { errorMessage: 'id no es UUID' },
    exists: {
      errorMessage: 'Falta id',
      options: { checkFalsy: true },
    },
  },
}

exports.userRegister = {
  email: {
    isEmail: { errorMessage: 'Email no válido' },
    exists: {
      errorMessage: 'Falta Email',
      options: { checkFalsy: true },
    },
    isString: { errorMessage: 'email no es string' },
  },
  password: {
    isString: { errorMessage: 'password no es string' },
    exists: {
      errorMessage: 'Falta password',
      options: { checkFalsy: true },
    },
    isStrongPassword: { errorMessage: 'Password dévil' },
  },
  avatar: {
    isString: { errorMessage: 'avatar no es string'},
    exists: {
      errorMessage: 'Falta avatar',
      options: { checkFalsy: true },
    },
    optional: { nullable: true, checkFalsy: true },
  },
  activo: {
    isBoolean: { errorMessage: 'avatar no es boolean' },
    optional: { nullable: true, checkFalsy: true },
  }
}

exports.userLogin = {
  email: {
    isEmail: { errorMessage: 'Email no válido' },
    exists: {
      errorMessage: 'Falta Email',
      options: { checkFalsy: true },
    },
    isString: { errorMessage: 'email no es string' },
  },
  password: {
    isString: { errorMessage: 'password no es string' },
    exists: {
      errorMessage: 'Falta password',
      options: { checkFalsy: true },
    },
    isStrongPassword: { errorMessage: 'Password dévil' },
  },
}
