const createHttpError = require('http-errors')
const { ErrorObject } = require('../../../helpers/error')
const { endpointResponse } = require('../../../helpers/success')
const { catchAsync } = require('../../../helpers/catchAsync')
const { getSindicatoByPk, getAllSindicatos, createSindicato, destroySindicato, updateSindicatoById } = require('../services/sindicatos.services')

module.exports = {
  show: catchAsync(async (req, res, next) => {
    try {
      const sindicato = await getSindicatoByPk(req.params.id)
      endpointResponse({
        res,
        message: 'Datos de Sindicato',
        body: sindicato,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error sindicato dato ] - [sindicato - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  list: catchAsync(async (req, res, next) => {
    try {
      const sindicatos = await getAllSindicatos()
      endpointResponse({
        res,
        message: 'Listado Sindicatos',
        body: sindicatos,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error sindicato listado ] - [sindicato - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  register: catchAsync(async (req, res, next) => {
    try {
      const sindicato = await createSindicato(req.body)
      endpointResponse({
        res,
        message: 'Sindicato creado exitosamente',
        body: sindicato,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error creando sindicato] - [sindicato - REGISTER]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  update: catchAsync(async (req, res, next) => {
    try {
      const sindicato = await updateSindicatoById(req)
      endpointResponse({
        res,
        message: 'Sindicato actualizado exitosamente',
        body: sindicato,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error actualizando sindicato] - [sindicato - UPDATE]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  destroy: catchAsync(async (req, res, next) => {
    try {
      const sindicato = await destroySindicato(req.params.id)
      endpointResponse({
        res,
        message: 'Sindicato eliminado exitosamente',
        body: sindicato,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error borrando sindicato] - [sindicato - DESTROY]: ${error.message}`,
      )
      next(httpError)
    }
  }),

}
