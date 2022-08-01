const createHttpError = require('http-errors')
const { ErrorObject } = require('../../../helpers/error')
const { endpointResponse } = require('../../../helpers/success')
const { catchAsync } = require('../../../helpers/catchAsync')
const { getSectorByPk, getAllSectores, getSectorByEmpresaId,createSector, destroySector, updateSectorById } = require('../services/sectores.services')

module.exports = {
  show: catchAsync(async (req, res, next) => {
    try {
      const sector = await getSectorByPk(req.params.id)
      endpointResponse({
        res,
        message: 'Datos de Sector',
        body: sector,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error sector dato ] - [sector - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  list: catchAsync(async (req, res, next) => {
    try {
      const sector = await getAllSectores()
      endpointResponse({
        res,
        message: 'Listado Sectores',
        body: sector,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error sector listado ] - [sector - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  register: catchAsync(async (req, res, next) => {
    try {
      const sector = await createSector(req.body)
      endpointResponse({
        res,
        message: 'Sector creado exitosamente',
        body: sector,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error creando sector] - [sector - REGISTER]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  update: catchAsync(async (req, res, next) => {
    try {
      const sector = await updateSectorById(req)
      endpointResponse({
        res,
        message: 'Sector actualizada exitosamente',
        body: sector,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error actualizando sector] - [sector - UPDATE]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  destroy: catchAsync(async (req, res, next) => {
    try {
      const sector = await destroySector(req.params.id)
      endpointResponse({
        res,
        message: 'Sector eliminada exitosamente',
        body: sector,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error borrando sector] - [sector - DESTROY]: ${error.message}`,
      )
      next(httpError)
    }
  }),

}
