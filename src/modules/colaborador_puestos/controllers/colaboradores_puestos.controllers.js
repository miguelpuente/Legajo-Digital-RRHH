const createHttpError = require('http-errors')
const { ErrorObject } = require('../../../helpers/error')
const { endpointResponse } = require('../../../helpers/success')
const { catchAsync } = require('../../../helpers/catchAsync')
const { getColaborador_PuestoByPk, getAllColaboradores_Puestos, getPuestosByColaboradorPk, createColaboradorPuesto, updateColaborador_PuestoById, destroyColaborador_Puesto, bajaByColaboradorByPuesto } = require('../services/colaboradores_puestos.services')

module.exports = {
  show: catchAsync(async (req, res, next) => {
    try {
      const colaboradorPuesto = await getColaborador_PuestoByPk(req.params.id)
      endpointResponse({
        res,
        message: 'Datos de colaborador_puesto',
        body: colaboradorPuesto,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error Colaborador_Puesto dato ] - [Colaborador_Puesto - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  list: catchAsync(async (req, res, next) => {
    try {
      const colaboradores_puestos = await getAllColaboradores_Puestos()
      endpointResponse({
        res,
        message: 'Listado Colaboradores_Puestos',
        body: colaboradores_puestos,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error Colaborador_Puesto listado ] - [Colaborador_Puesto - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  register: catchAsync(async (req, res, next) => {
    try {
      const colaboradorPuesto = await createColaboradorPuesto(req.body)
      endpointResponse({
        res,
        message: 'Colaborador_Puesto creado exitosamente',
        body: colaboradorPuesto,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error creando Colaborador_Puesto] - [Colaborador_Puesto - REGISTER]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  update: catchAsync(async (req, res, next) => {
    try {
      const colaboradorPuesto = await updateColaborador_PuestoById(req)
      endpointResponse({
        res,
        message: 'Colaborador_Puesto actualizado exitosamente',
        body: colaboradorPuesto,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error actualizando Colaborador_Puesto] - [Colaborador_Puesto - UPDATE]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  destroy: catchAsync(async (req, res, next) => {
    try {
      const colaboradorPuesto = await destroyColaborador_Puesto(req.params.id)
      endpointResponse({
        res,
        message: 'Colaborador_Puesto eliminado exitosamente',
        body: colaboradorPuesto,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error borrando Colaborador_Puesto] - [Colaborador_Puesto - DESTROY]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  showPuestosxColaborador: catchAsync(async (req, res, next) => {
    try {
      const puestosxcolaborador = await getPuestosByColaboradorPk(req.params.id)
      endpointResponse({
        res,
        message: 'Puestos del colaborador',
        body: puestosxcolaborador,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error puestos-colaborador dato ] - [puestos-colaborador - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  bajaColaboradorPuesto: catchAsync(async (req, res, next) => {
    try {
      const puestocolaborador = await bajaByColaboradorByPuesto(req)
      endpointResponse({
        res,
        message: 'Baja Puesto-colaborador',
        body: puestocolaborador,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error puesto-colaborador baja ] - [puesto-colaborador - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),
  
}
