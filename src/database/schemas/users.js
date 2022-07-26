exports.userRegister = {
    nombre: {
      isString: { errorMessage: 'Nombre no es string' },
      exists: {
        errorMessage: 'Falta Nombre',
        options: { checkFalsy: true },
      },
    },
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
      isStrongPassword: true,
      errorMessage: 'Password dévil',
    },
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
      isStrongPassword: true,
      errorMessage: 'Password dévil',
    },
  }
