const createHttpError = require('http-errors')
const { ErrorObject } = require('../../../helpers/error')
const { endpointResponse } = require('../../../helpers/success')
const { catchAsync } = require('../../../helpers/catchAsync')
const { getReemplazoByPk, getAllReemplazos, createReemplazo, destroyReemplazo, updateReemplazoById } = require('../services/reemplazos.services')

module.exports = {
  show: catchAsync(async (req, res, next) => {
    try {
      const reemplazo = await getReemplazoByPk(req.params.id)
      endpointResponse({
        res,
        message: 'Datos de Reemplazo',
        body: reemplazo,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error reemplazo dato ] - [reemplazo - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  list: catchAsync(async (req, res, next) => {
    try {
      const reemplazo = await getAllReemplazos()
      endpointResponse({
        res,
        message: 'Listado Reemplazos',
        body: reemplazo,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error reemplazo listado ] - [reemplazo - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  register: catchAsync(async (req, res, next) => {
    try {
      const reemplazo = await createReemplazo(req.body)
      endpointResponse({
        res,
        message: 'Reemplazo creado exitosamente',
        body: reemplazo,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error creando reemplazo] - [reemplazo - REGISTER]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  update: catchAsync(async (req, res, next) => {
    try {
      const area = await updateReemplazoById(req)
      endpointResponse({
        res,
        message: 'Area actualizada exitosamente',
        body: area,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error actualizando area] - [area - UPDATE]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  destroy: catchAsync(async (req, res, next) => {
    try {
      const reemplazo = await destroyReemplazo(req.params.id)
      endpointResponse({
        res,
        message: 'Reemplazo eliminada exitosamente',
        body: reemplazo,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error borrando reemplazo] - [reemplazo - DESTROY]: ${error.message}`,
      )
      next(httpError)
    }
  }),

}
