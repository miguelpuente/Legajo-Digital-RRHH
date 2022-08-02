const createHttpError = require('http-errors')
const { ErrorObject } = require('../../../helpers/error')
const { endpointResponse } = require('../../../helpers/success')
const { catchAsync } = require('../../../helpers/catchAsync')
const { getSexoByPk, getAllSexos,createSexo, destroySexo, updateSexoById } = require('../services/sexos.services')

module.exports = {
  show: catchAsync(async (req, res, next) => {
    try {
      const sexo = await getSexoByPk(req.params.id)
      endpointResponse({
        res,
        message: 'Datos de Sexo',
        body: sexo,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error sexo dato ] - [sexo - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  list: catchAsync(async (req, res, next) => {
    try {
      const sexo = await getAllSexos()
      endpointResponse({
        res,
        message: 'Listado Sexos',
        body: sexo,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error sexo listado ] - [sexo - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  register: catchAsync(async (req, res, next) => {
    try {
      const sexo = await createSexo(req.body)
      endpointResponse({
        res,
        message: 'Sexo creada exitosamente',
        body: sexo,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error creando sexo] - [sexo - REGISTER]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  update: catchAsync(async (req, res, next) => {
    try {
      const sexo = await updateSexoById(req)
      endpointResponse({
        res,
        message: 'Sexo actualizado exitosamente',
        body: sexo,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error actualizando sexo] - [sexo - UPDATE]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  destroy: catchAsync(async (req, res, next) => {
    try {
      const sexo = await destroySexo(req.params.id)
      endpointResponse({
        res,
        message: 'Sexo eliminado exitosamente',
        body: sexo,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error borrando sexo] - [sexo - DESTROY]: ${error.message}`,
      )
      next(httpError)
    }
  }),

}
