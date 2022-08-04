const createHttpError = require('http-errors')
const { ErrorObject } = require('../../../helpers/error')
const { endpointResponse } = require('../../../helpers/success')
const { catchAsync } = require('../../../helpers/catchAsync')
const { getLicencia_tipoByPk, getAllLicencias_tipos,createLicencia_tipo, destroyLicencia_tipo, updateLicencia_tipoById } = require('../services/licencias_tipos.services')

module.exports = {
  show: catchAsync(async (req, res, next) => {
    try {
      const licencia_tipo = await getLicencia_tipoByPk(req.params.id)
      endpointResponse({
        res,
        message: 'Datos de Area',
        body: licencia_tipo,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error Licencia_tipo dato ] - [Licencia_tipo - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  list: catchAsync(async (req, res, next) => {
    try {
      const area = await getAllLicencias_tipos()
      endpointResponse({
        res,
        message: 'Listado de Licencia tipo',
        body: area,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error Licencia_tipo listado ] - [Licencia_tipo - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  register: catchAsync(async (req, res, next) => {
    try {
      const licencia_tipo = await createLicencia_tipo(req.body)
      endpointResponse({
        res,
        message: 'Licencia_tipo creada exitosamente',
        body: licencia_tipo,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error creando Licencia_tipo] - [Licencia_tipo - REGISTER]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  update: catchAsync(async (req, res, next) => {
    try {
      const licencia_tipo = await updateLicencia_tipoById(req)
      endpointResponse({
        res,
        message: 'Licencia_tipo actualizada exitosamente',
        body: licencia_tipo,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error actualizando Licencia_tipo] - [Licencia_tipo - UPDATE]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  destroy: catchAsync(async (req, res, next) => {
    try {
      const licencia_tipo = await destroyLicencia_tipo(req.params.id)
      endpointResponse({
        res,
        message: 'Licencia_tipo eliminada exitosamente',
        body: licencia_tipo,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error borrando Licencia_tipo] - [Licencia_tipo - DESTROY]: ${error.message}`,
      )
      next(httpError)
    }
  }),

}
