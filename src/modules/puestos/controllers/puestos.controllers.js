const createHttpError = require('http-errors')
const { ErrorObject } = require('../../../helpers/error')
const { endpointResponse } = require('../../../helpers/success')
const { catchAsync } = require('../../../helpers/catchAsync')
const { getPuestoByPk, getAllPuestos, createPuesto, destroyPuesto, updatePuestoById } = require('../services/puestos.services')

module.exports = {
  show: catchAsync(async (req, res, next) => {
    try {
      const puesto = await getPuestoByPk(req.params.id)
      endpointResponse({
        res,
        message: 'Datos de Puesto',
        body: puesto,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error puesto dato ] - [puesto - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  list: catchAsync(async (req, res, next) => {
    try {
      const puestos = await getAllPuestos()
      endpointResponse({
        res,
        message: 'Listado Puestos',
        body: puestos,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error puesto listado ] - [puesto - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  register: catchAsync(async (req, res, next) => {
    try {
      const puesto = await createPuesto(req.body)
      endpointResponse({
        res,
        message: 'Puesto creado exitosamente',
        body: puesto,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error creando puesto] - [puesto - REGISTER]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  update: catchAsync(async (req, res, next) => {
    try {
      const puesto = await updatePuestoById(req)
      endpointResponse({
        res,
        message: 'Puesto actualizado exitosamente',
        body: puesto,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error actualizando puesto] - [puesto - UPDATE]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  destroy: catchAsync(async (req, res, next) => {
    try {
      const puesto = await destroyPuesto(req.params.id)
      endpointResponse({
        res,
        message: 'Puesto eliminado exitosamente',
        body: puesto,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error borrando puesto] - [puesto - DESTROY]: ${error.message}`,
      )
      next(httpError)
    }
  }),

}
