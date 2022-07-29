const createHttpError = require('http-errors')
const { ErrorObject } = require('../../../helpers/error')
const { endpointResponse } = require('../../../helpers/success')
const { catchAsync } = require('../../../helpers/catchAsync')
const { getUserByPk, getAllUsers, createUser, createLogin, destroyUser } = require('../services/users.services')

module.exports = {
  show: catchAsync(async (req, res, next) => {
    try {
      const { id } = req.params
      const user = await getUserByPk(id)
      endpointResponse({
        res,
        message: 'Datos de Usuario',
        body: user,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error user dato ] - [user - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  list: catchAsync(async (req, res, next) => {
    try {
      const users = await getAllUsers()
      endpointResponse({
        res,
        message: 'Listado de Usuarios',
        body: users,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error users listado ] - [users - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  register: catchAsync(async (req, res, next) => {
    try {
      const user = await createUser(req.body)
      endpointResponse({
        res,
        message: 'Usuario creado exitosamente',
        body: user,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error creando user] - [auth - REGISTER]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  login: catchAsync(async (req, res, next) => {
    try {
      const { email, password } = req.body
      const user = await createLogin(email, password)
      if (user) {
        endpointResponse({
          res,
          message: 'Login creado exitosamente',
          body: user,
        })
      } else {
        throw new ErrorObject('{ok: false}', 403)
      }
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error logueando usuario] - [auth - LOGIN]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  destroy: catchAsync(async (req, res, next) => {
    try {
      const user = await destroyUser(req.params.id)
      endpointResponse({
        res,
        message: 'User successfuly deleted',
        body: user,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error borrando usuario] - [user - DESTROY]: ${error.message}`,
      )
      next(httpError)
    }
  }),
}
