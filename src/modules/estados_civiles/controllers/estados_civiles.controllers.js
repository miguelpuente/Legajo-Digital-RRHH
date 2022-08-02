const createHttpError = require('http-errors')
const { ErrorObject } = require('../../../helpers/error')
const { endpointResponse } = require('../../../helpers/success')
const { catchAsync } = require('../../../helpers/catchAsync')
const { getEstado_CivilByPk, getAllEstados_Civiles,createEstado_Civil, destroyEstado_Civil, updateEstado_CivilById } = require('../services/estados_civiles.services')

module.exports = {
  show: catchAsync(async (req, res, next) => {
    try {
      const estado_civil = await getEstado_CivilByPk(req.params.id)
      endpointResponse({
        res,
        message: 'Datos de Estado Civil',
        body: estado_civil,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error estados_civil dato ] - [estado_civil - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  list: catchAsync(async (req, res, next) => {
    try {
      const estados_civiles = await getAllEstados_Civiles()
      endpointResponse({
        res,
        message: 'Listado Estados Civiles',
        body: estados_civiles,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error estados civil listado ] - [estados civil - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  register: catchAsync(async (req, res, next) => {
    try {
      const estado_civil = await createEstado_Civil(req.body)
      endpointResponse({
        res,
        message: 'Estado Civil creado exitosamente',
        body: estado_civil,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error creando estado civil] - [estado civil - REGISTER]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  update: catchAsync(async (req, res, next) => {
    try {
      const estado_civil = await updateEstado_CivilById(req)
      endpointResponse({
        res,
        message: 'Estado Civil actualizado exitosamente',
        body: estado_civil,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error actualizando Estado Civil] - [Estado Civil - UPDATE]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  destroy: catchAsync(async (req, res, next) => {
    try {
      const estado_civil = await destroyEstado_Civil(req.params.id)
      endpointResponse({
        res,
        message: 'Estado Civil eliminada exitosamente',
        body: estado_civil,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error borrando estado civil] - [estado civil - DESTROY]: ${error.message}`,
      )
      next(httpError)
    }
  }),

}
