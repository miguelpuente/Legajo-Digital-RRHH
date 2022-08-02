const createHttpError = require('http-errors')
const { ErrorObject } = require('../../../helpers/error')
const { endpointResponse } = require('../../../helpers/success')
const { catchAsync } = require('../../../helpers/catchAsync')
const { getRelacion_FamiliarByPk, getAllRelaciones_Familiares,createRelacion_Familiar, destroyRelacion_Familiar, updateRelacion_FamiliarById } = require('../services/relaciones_familiares.services')

module.exports = {
  show: catchAsync(async (req, res, next) => {
    try {
      const relacion_familiar = await getRelacion_FamiliarByPk(req.params.id)
      endpointResponse({
        res,
        message: 'Datos de relacion familiar',
        body: relacion_familiar,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error relacion familiar dato ] - [relacion familiar - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  list: catchAsync(async (req, res, next) => {
    try {
      const relaciones_familiares = await getAllRelaciones_Familiares()
      endpointResponse({
        res,
        message: 'Listado Relaciones Familiares',
        body: relaciones_familiares,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error relacion familiar listado ] - [relacion familiar - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  register: catchAsync(async (req, res, next) => {
    try {
      const relacion_familiar = await createRelacion_Familiar(req.body)
      endpointResponse({
        res,
        message: 'Relacion Familiar creada exitosamente',
        body: relacion_familiar,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error creando relacion familiar] - [relacion familiar - REGISTER]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  update: catchAsync(async (req, res, next) => {
    try {
      const relacion_familiar = await updateRelacion_FamiliarById(req)
      endpointResponse({
        res,
        message: 'Relacion familiar actualizada exitosamente',
        body: relacion_familiar,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error actualizando relacion familiar] - [relacion familiar - UPDATE]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  destroy: catchAsync(async (req, res, next) => {
    try {
      const relacion_familiar = await destroyRelacion_Familiar(req.params.id)
      endpointResponse({
        res,
        message: 'Relacion familiar eliminada exitosamente',
        body: relacion_familiar,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error borrando relacion familiar] - [relacion - DESTROY]: ${error.message}`,
      )
      next(httpError)
    }
  }),

}
