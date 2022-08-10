const createHttpError = require('http-errors')
const { ErrorObject } = require('../../../helpers/error')
const { endpointResponse } = require('../../../helpers/success')
const { catchAsync } = require('../../../helpers/catchAsync')
const { getDato_LaboralByPk, getAllDatos_Laborales, createDato_Laboral, destroyDato_Laboral, updateDato_LaboralById, Dato_Laboral_baja } = require('../services/datos_laborales.services')

module.exports = {
  show: catchAsync(async (req, res, next) => {
    try {
      const dato_laboral = await getDato_LaboralByPk(req.params.id)
      endpointResponse({
        res,
        message: 'Dato laboral',
        body: dato_laboral,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error dato_laboral dato ] - [dato_laboral - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  list: catchAsync(async (req, res, next) => {
    try {
      const datos_laborales = await getAllDatos_Laborales()
      endpointResponse({
        res,
        message: 'Listado Datos Laborales',
        body: datos_laborales,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error dato_laboral listado ] - [dato_laboral - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  register: catchAsync(async (req, res, next) => {
    try {
      const dato_laboral = await createDato_Laboral(req.body)
      endpointResponse({
        res,
        message: 'Dato Laboral creado exitosamente',
        body: dato_laboral,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error creando dato_laboral] - [dato_laboral - REGISTER]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  update: catchAsync(async (req, res, next) => {
    try {
      const dato_laboral = await updateDato_LaboralById(req)
      endpointResponse({
        res,
        message: 'Dato laboral actualizado exitosamente',
        body: dato_laboral,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error actualizando dato laboral] - [dato laboral - UPDATE]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  destroy: catchAsync(async (req, res, next) => {
    try {
      const dato_laboral = await destroyDato_Laboral(req.params.id)
      endpointResponse({
        res,
        message: 'Dato laboral eliminado exitosamente',
        body: dato_laboral,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error borrando dato_laboral] - [dato_laboral - DESTROY]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  down: catchAsync(async (req, res, next) => {
    try {
      const baja = await Dato_Laboral_baja(req)
      endpointResponse({
        res,
        message: 'Baja laboral actualizada exitosamente',
        body: baja,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error baja dato_laboral] - [dato_laboral - DOWN]: ${error.message}`,
      )
      next(httpError)
    }
  }),

}
