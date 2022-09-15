const createHttpError = require('http-errors')
const { ErrorObject } = require('../../../helpers/error')
const { endpointResponse } = require('../../../helpers/success')
const { catchAsync } = require('../../../helpers/catchAsync')
const { uploadFile, download } = require('../services/file.services')

module.exports = {
  up: catchAsync(async (req, res, next) => {
    try {
      const archivo = await uploadFile(req)
      endpointResponse({
        res,
        message: 'Archivo subido exitosamente',
        body: archivo,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error archivo dato ] - [archivo - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  down: catchAsync(async (req, res, next) => {
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
}