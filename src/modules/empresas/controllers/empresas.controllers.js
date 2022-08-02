const createHttpError = require('http-errors')
const { endpointResponse } = require('../../../helpers/success')
const { catchAsync } = require('../../../helpers/catchAsync')
const { getEmpresaByPk, getAllEmpresas, createEmpresa, destroyEmpresa, updateEmpresaById, getSindicatoByEmpresaPk, createEmpresaSindicato, destroyEmpresaSindicato } = require('../services/empresas.services')

module.exports = {
  show: catchAsync(async (req, res, next) => {
    try {
      const empresa = await getEmpresaByPk(req.params.id)
      endpointResponse({
        res,
        message: 'Datos de Empresa',
        body: empresa,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error empresa dato ] - [empresa - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  list: catchAsync(async (req, res, next) => {
    try {
      const empresa = await getAllEmpresas()
      endpointResponse({
        res,
        message: 'Listado Empresas',
        body: empresa,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error empresa listado ] - [empresa - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  register: catchAsync(async (req, res, next) => {
    try {
      const empresa = await createEmpresa(req.body)
      endpointResponse({
        res,
        message: 'Empresa creada exitosamente',
        body: empresa,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error creando empresa] - [empresa - REGISTER]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  update: catchAsync(async (req, res, next) => {
    try {
      const empresa = await updateEmpresaById(req)
      endpointResponse({
        res,
        message: 'Empresa actualizada exitosamente',
        body: empresa,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error actualizando empresa] - [empresa - UPDATE]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  destroy: catchAsync(async (req, res, next) => {
    try {
      const empresa = await destroyEmpresa(req.params.id)
      endpointResponse({
        res,
        message: 'Empresa eliminada exitosamente',
        body: empresa,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error borrando empresa] - [empresa - DESTROY]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  registerEmpresaSindicato: catchAsync(async (req, res, next) => {
    try {
      const { empresa_id, sindicato_id } = req.params
      const sindicato = await createEmpresaSindicato(empresa_id, sindicato_id)
      endpointResponse({
        res,
        message: 'Sindicato asociado exitosamente',
        body: sindicato,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error creando sindicato] - [sindicato - REGISTER]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  getEmpresaSindicato: catchAsync(async (req, res, next) => {
    try {
      const { empresa_id } = req.params
      const sindicatos = await getSindicatoByEmpresaPk(empresa_id)
      endpointResponse({
        res,
        message: 'Listado Sindicato',
        body: sindicatos,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error listando sindicato-empresa] - [sindicato-empresa - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  destroyEmpresaSindicato: catchAsync(async (req, res, next) => {
    try {
      const { empresa_id, sindicato_id } = req.params
      const sindicato = await destroyEmpresaSindicato(empresa_id, sindicato_id)
      endpointResponse({
        res,
        message: 'Sindicato eliminado exitosamente',
        body: sindicato,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error borrando empresa] - [empresa - DESTROY]: ${error.message}`,
      )
      next(httpError)
    }
  }),

}
