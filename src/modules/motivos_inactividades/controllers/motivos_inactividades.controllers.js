const createHttpError = require('http-errors')
const { ErrorObject } = require('../../../helpers/error')
const { endpointResponse } = require('../../../helpers/success')
const { catchAsync } = require('../../../helpers/catchAsync')
const { getMotivo_InactividadByPk, getAllMotivos_Inactividades,createMotivos_Inactividad, destroyMotivo_Inactividad, updateMotivo_InactividadById } = require('../services/motivos_inactividades.services')

module.exports = {
  show: catchAsync(async (req, res, next) => {
    try {
      const motivo_inactividad = await getMotivo_InactividadByPk(req.params.id)
      endpointResponse({
        res,
        message: 'Datos de Motivo inactividad',
        body: motivo_inactividad,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error motivo inactividad dato ] - [motivo inactividad - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  list: catchAsync(async (req, res, next) => {
    try {
      const motivo_inactividad = await getAllMotivos_Inactividades()
      endpointResponse({
        res,
        message: 'Listado Motivos inactividades',
        body: motivo_inactividad,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error motivo inactividad listado ] - [motivo inactividad - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  register: catchAsync(async (req, res, next) => {
    try {
      const motivo_inactividad = await createMotivos_Inactividad(req.body)
      endpointResponse({
        res,
        message: 'Motivo inactividad creada exitosamente',
        body: motivo_inactividad,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error creando motivo inactividad] - [motivo inactividad - REGISTER]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  update: catchAsync(async (req, res, next) => {
    try {
      const motivo_inactividad = await updateMotivo_InactividadById(req)
      endpointResponse({
        res,
        message: 'Area actualizada exitosamente',
        body: motivo_inactividad,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error actualizando motivo_inactividad] - [motivo_inactividad - UPDATE]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  destroy: catchAsync(async (req, res, next) => {
    try {
      const motivo_inactividad = await destroyMotivo_Inactividad(req.params.id)
      endpointResponse({
        res,
        message: 'Area eliminada exitosamente',
        body: motivo_inactividad,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error borrando motivo inactividad] - [motivo inactividad - DESTROY]: ${error.message}`,
      )
      next(httpError)
    }
  }),

}
