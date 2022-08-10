const createHttpError = require('http-errors')
const { ErrorObject } = require('../../../helpers/error')
const { endpointResponse } = require('../../../helpers/success')
const { catchAsync } = require('../../../helpers/catchAsync')
const { getAreaByPk, getAllAreas,createArea, destroyArea, updateAreaById } = require('../services/areas.services')

/**
  * @swagger
  * components:
  *  schemas:
  *     Area:
  *       type: object
  *       properties:
  *         id:
  *           type: uuid
  *         empresa_id:
  *           type: uuid
  *         nombre:
  *           type: string
  *         activo:
  *           type: boolean
  *         createdAt:
  *           type: integer
  *           format: date
  *         updatedAt:
  *           type: integer
  *           format: date
  *         deletedAt:
  *           type: integer
  *           format: date
  *       example:
  *         empresa_id: 9c832428-02bc-4713-ba8c-48bdf1010b6f
  *         nombre: Desarrollo
  *         activo: true
  *         createdAt: 2022-08-01 19:50:30
  *         updatedAt: 2022-08-01 19:50:30
  *         deletedAt: null
  *
  */

/**
  * @swagger
  *  /areas:
  *  post:
  *   summary: crear area
  *   tags: [Area]
  *   requestBody:
  *     required: true
  *     content:
  *       application/json:
  *         schema:
  *           type: object
  *           $ref: '#/components/schemas/Area'
  *   responses:
  *     200:
  *       description: area creada exitosamente
  *       content:
  *         application/json:
  *           schema:
  *             type: object
  *             properties:
  *               status:
  *                 type: boolean
  *               code:
  *                 type: integer
  *               message:
  *                 type: string
  *               body:
  *                 type: object
  *                 properties:
  *                   id:
  *                     type: uuid
  *                   empresa_id:
  *                     type: uuid
  *                   nombre:
  *                     type: string
  *                   activo:
  *                     type: boolean
  *                   createdAt:
  *                     type: string
  *                     format: date-time
  *                   updatedAt:
  *                     type: string
  *                     format: date-time
  *                   deletedAt:
  *                     type: string
  *                     format: date-time
  *             example:
  *               status: true
  *               code: 200
  *               message: Area creada exitosamente
  *               body:
  *                 id: eb9fc74d-6ebd-48a8-99c9-0819d00e7a28
  *                 empresa_id: 4bac026a-44f8-4c36-bd3c-09edc1f3cb1f
  *                 nombre: Desarrollo
  *                 activo: true
  *                 createdAt: 2022-08-01 19:50:30
  *                 updatedAt: 2022-08-01 19:50:30
  *     401:
  *       description: Unauthorized user
  *     403:
  *       description: Token is required
  *     500:
  *       description: Internal server error
  *
  */

/**
  * @swagger
  *  /areas/{id}:
  *  delete:
  *   summary: delete area
  *   tags: [Area]
  *   parameters:
  *     - in: path
  *       name: id
  *       schema:
  *         type: uuid
  *       required: true
  *       description: UUID de area a borrar
  *   responses:
  *     200:
  *       description: area borrada exitosamente
  *       content:
  *         application/json:
  *           schema:
  *             type: object
  *             properties:
  *               status:
  *                 type: boolean
  *               code:
  *                 type: integer
  *               message:
  *                 type: string
  *               body:
  *                 type: array
  *                 items:
  *                   type: integer
  *             example:
  *               status: true
  *               code: 200
  *               message: testimonial created successfuly
  *               body: eb9fc74d-6ebd-48a8-99c9-0819d00e7a28
  *     401:
  *       description: Unauthorized user
  *     403:
  *       description: Token is required
  *     404:
  *       description: Testimonial not found
  *     500:
  *       description: Internal server error
  */

/**
  * @swagger
  *  /areas/{id}:
  *  put:
  *   summary: Actualizar Area
  *   tags: [Area]
  *   parameters:
  *     - in: path
  *       name: uuid
  *       schema:
  *         type: uuid
  *       required: true
  *       description: UUID del area a actualizar
  *   requestBody:
  *     required: true
  *     content:
  *       application/json:
  *         schema:
  *           type: object
  *           $ref: '#/components/schemas/Area'
  *   responses:
  *     200:
  *       description: area actualizada exitosamente
  *       content:
  *         application/json:
  *           schema:
  *             type: object
  *             properties:
  *               status:
  *                 type: boolean
  *               code:
  *                 type: integer
  *               message:
  *                 type: string
  *               body:
  *                 type: object
  *                 properties:
  *                   id:
  *                     type: uuid
  *                   empresa_id:
  *                     type: uuid
  *                   nombre:
  *                     type: string
  *                   activo:
  *                     type: boolean
  *                   createdAt:
  *                     type: string
  *                     format: date-time
  *                   updatedAt:
  *                     type: string
  *                     format: date-time
  *                   deletedAt:
  *                     type: string
  *                     format: date-time
  *             example:
  *               status: true
  *               code: 200
  *               message: area actualizada exitosamente
  *               body:
  *                 id: eb9fc74d-6ebd-48a8-99c9-0819d00e7a28
  *                 empresa_id: 4bac026a-44f8-4c36-bd3c-09edc1f3cb1f
  *                 nombre: Nuevo Desarrollo
  *                 activo: true
  *                 createdAt: 2022-08-09 19:50:30
  *                 updatedAt: 2022-08-09 19:50:30
  *     401:
  *       description: Unauthorized user
  *     403:
  *       description: Token is required
  *     404:
  *       description: Area not found
  *     500:
  *       description: Internal server error
  *
  */



module.exports = {
  show: catchAsync(async (req, res, next) => {
    try {
      const area = await getAreaByPk(req.params.id)
      endpointResponse({
        res,
        message: 'Datos de Area',
        body: area,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error area dato ] - [area - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  list: catchAsync(async (req, res, next) => {
    try {
      const area = await getAllAreas()
      endpointResponse({
        res,
        message: 'Listado Areas',
        body: area,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error area listado ] - [area - GET]: ${error.message}`,
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
