const createHttpError = require('http-errors')
const { ErrorObject } = require('../../../helpers/error')
const { endpointResponse } = require('../../../helpers/success')
const { catchAsync } = require('../../../helpers/catchAsync')
const { getCategoriaByPk, getAllCategorias,createCategoria, destroyCategoria, updateCategoriaById } = require('../services/categorias.services')

module.exports = {
  show: catchAsync(async (req, res, next) => {
    try {
      const categoria = await getCategoriaByPk(req.params.id)
      endpointResponse({
        res,
        message: 'Datos de Categoria',
        body: categoria,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error categoria dato ] - [categoria - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  list: catchAsync(async (req, res, next) => {
    try {
      const categoria = await getAllCategorias()
      endpointResponse({
        res,
        message: 'Listado Categorias',
        body: categoria,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error categoria listado ] - [categoria - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  register: catchAsync(async (req, res, next) => {
    try {
      const categoria = await createCategoria(req.body)
      endpointResponse({
        res,
        message: 'Categoria creada exitosamente',
        body: categoria,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error creando categoria] - [categoria - REGISTER]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  update: catchAsync(async (req, res, next) => {
    try {
      const categoria = await updateCategoriaById(req)
      endpointResponse({
        res,
        message: 'Categoria actualizada exitosamente',
        body: categoria,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error actualizando categoria] - [categoria - UPDATE]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  destroy: catchAsync(async (req, res, next) => {
    try {
      const categoria = await destroyCategoria(req.params.id)
      endpointResponse({
        res,
        message: 'Categoria eliminada exitosamente',
        body: categoria,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error borrando categoria] - [categoria - DESTROY]: ${error.message}`,
      )
      next(httpError)
    }
  }),

}
