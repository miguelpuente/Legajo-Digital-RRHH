const createHttpError = require('http-errors')
const { ErrorObject } = require('../../../helpers/error')
const { endpointResponse } = require('../../../helpers/success')
const { catchAsync } = require('../../../helpers/catchAsync')
const { getColaboradorByPk, getAllColaboradores, createColaborador, destroyColaborador, updateColaboradorById } = require('../services/colaboradores.services')

module.exports = {
    show: catchAsync(async (req, res, next) => {
      try {
        const colaborador = await getColaboradorByPk(req.params.id)
        endpointResponse({
          res,
          message: 'Datos de Colaborador',
          body: colaborador,
        })
      } catch (error) {
        const httpError = createHttpError(
          error.statusCode,
          `[Error colaborador dato ] - [colaborador - GET]: ${error.message}`,
        )
        next(httpError)
      }
    }),
  
    list: catchAsync(async (req, res, next) => {
      try {
        const colaboradores = await getAllColaboradores()
        endpointResponse({
          res,
          message: 'Listado Colaboradores',
          body: colaboradores,
        })
      } catch (error) {
        const httpError = createHttpError(
          error.statusCode,
          `[Error colaboradores listado ] - [colaboradores - GET]: ${error.message}`,
        )
        next(httpError)
      }
    }),
  
    register: catchAsync(async (req, res, next) => {
      try {
        const colaborador = await createColaborador(req.body)
        endpointResponse({
          res,
          message: 'Colaborador creado exitosamente',
          body: colaborador,
        })
      } catch (error) {
        const httpError = createHttpError(
          error.statusCode,
          `[Error creando colaborador] - [colaborador - REGISTER]: ${error.message}`,
        )
        next(httpError)
      }
    }),
  
    update: catchAsync(async (req, res, next) => {
      try {
        const colaborador = await updateColaboradorById(req)
        endpointResponse({
          res,
          message: 'Colaborador actualizado exitosamente',
          body: colaborador,
        })
      } catch (error) {
        const httpError = createHttpError(
          error.statusCode,
          `[Error actualizando colaborador] - [colaborador - UPDATE]: ${error.message}`,
        )
        next(httpError)
      }
    }),
  
    destroy: catchAsync(async (req, res, next) => {
      try {
        const colaborador = await destroyColaborador(req.params.id)
        endpointResponse({
          res,
          message: 'Colaborador eliminado exitosamente',
          body: colaborador,
        })
      } catch (error) {
        const httpError = createHttpError(
          error.statusCode,
          `[Error borrando colaborador] - [colaborador - DESTROY]: ${error.message}`,
        )
        next(httpError)
      }
    }),
  
  }
  