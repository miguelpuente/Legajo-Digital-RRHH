const createHttpError = require('http-errors')
const { ErrorObject } = require('../../../helpers/error')
const { endpointResponse } = require('../../../helpers/success')
const { catchAsync } = require('../../../helpers/catchAsync')
const { getFamiliarByPk, getAllFamiliares, createFamiliar, destroyFamiliar, updateFamiliarById } = require('../services/familiares.services')

module.exports = {
  show: catchAsync(async (req, res, next) => {
    try {
      const familiar = await getFamiliarByPk(req.params.id)
      endpointResponse({
        res,
        message: 'Datos de Familiar',
        body: familiar,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error familiar dato ] - [familiar - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  list: catchAsync(async (req, res, next) => {
    try {
      const familiares = await getAllFamiliares()
      endpointResponse({
        res,
        message: 'Listado Familiares',
        body: familiares,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error familiares listado ] - [familiares - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  register: catchAsync(async (req, res, next) => {
    try {
      const familiar = await createFamiliar(req.body)
      endpointResponse({
        res,
        message: 'Familiar creada exitosamente',
        body: familiar,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error creando familiar] - [familiar - REGISTER]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  update: catchAsync(async (req, res, next) => {
    try {
      const familiar = await updateFamiliarById(req)
      endpointResponse({
        res,
        message: 'Familiar actualizado exitosamente',
        body: familiar,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error actualizando familiar] - [familiar - UPDATE]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  destroy: catchAsync(async (req, res, next) => {
    try {
      const familiar = await destroyFamiliar(req.params.id)
      endpointResponse({
        res,
        message: 'Familiar eliminada exitosamente',
        body: familiar,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error borrando familiar] - [familiar - DESTROY]: ${error.message}`,
      )
      next(httpError)
    }
  }),

}
