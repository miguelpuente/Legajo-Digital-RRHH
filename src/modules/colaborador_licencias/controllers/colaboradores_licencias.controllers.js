const createHttpError = require('http-errors')
const { ErrorObject } = require('../../../helpers/error')
const { endpointResponse } = require('../../../helpers/success')
const { catchAsync } = require('../../../helpers/catchAsync')
const { getColaborador_licenciaByPk, getAllColaboradores_licencias,createArea, destroyArea, updateAreaById } = require('../services/areas.services')

module.exports = {
  show: catchAsync(async (req, res, next) => {
    try {
      const colaborador_licencia = await getColaborador_licenciaByPk(req.params.id)
      endpointResponse({
        res,
        message: 'Datos de Colaborador_licencia',
        body: colaborador_licencia,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error colaborador_licencia dato ] - [colaborador_licencia - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  list: catchAsync(async (req, res, next) => {
    try {
      const colaborador_licencia = await getAllColaboradores_licencias()
      endpointResponse({
        res,
        message: 'Listado Colaboradores_licencias',
        body: colaborador_licencia,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error colaborador_licencia listado ] - [colaborador_licencia - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  register: catchAsync(async (req, res, next) => {
    try {
      const area = await createArea(req.body)
      endpointResponse({
        res,
        message: 'Area creada exitosamente',
        body: area,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error creando area] - [area - REGISTER]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  update: catchAsync(async (req, res, next) => {
    try {
      const area = await updateAreaById(req)
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
      const area = await destroyArea(req.params.id)
      endpointResponse({
        res,
        message: 'Area eliminada exitosamente',
        body: area,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error borrando area] - [area - DESTROY]: ${error.message}`,
      )
      next(httpError)
    }
  }),

}
