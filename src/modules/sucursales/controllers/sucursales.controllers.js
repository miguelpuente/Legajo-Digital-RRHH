const createHttpError = require('http-errors')
const { ErrorObject } = require('../../../helpers/error')
const { endpointResponse } = require('../../../helpers/success')
const { catchAsync } = require('../../../helpers/catchAsync')
const { getSucursalByPk, getAllSucursales, createSucursal, destroySucursal, updateSucursalById } = require('../services/sucursales.services')

module.exports = {
  show: catchAsync(async (req, res, next) => {
    try {
      const sucursal = await getSucursalByPk(req.params.id)
      endpointResponse({
        res,
        message: 'Datos de Sucursal',
        body: sucursal,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error sucursal dato ] - [sucursal - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  list: catchAsync(async (req, res, next) => {
    try {
      const sucursal = await getAllSucursales()
      endpointResponse({
        res,
        message: 'Listado Sucursales',
        body: sucursal,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error sucursal listado ] - [sucursal - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  register: catchAsync(async (req, res, next) => {
    try {
      const sucursal = await createSucursal(req.body)
      endpointResponse({
        res,
        message: 'Sucursal creada exitosamente',
        body: sucursal,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error creando sucursal] - [sucursal - REGISTER]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  update: catchAsync(async (req, res, next) => {
    try {
      const sucursal = await updateSucursalById(req)
      endpointResponse({
        res,
        message: 'Sucursal actualizada exitosamente',
        body: sucursal,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error actualizando sucursal] - [sucursal - UPDATE]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  destroy: catchAsync(async (req, res, next) => {
    try {
      const sucursal = await destroySucursal(req.params.id)
      endpointResponse({
        res,
        message: 'Sucursal eliminada exitosamente',
        body: sucursal,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error borrando sucursal] - [sucursal - DESTROY]: ${error.message}`,
      )
      next(httpError)
    }
  }),

}
