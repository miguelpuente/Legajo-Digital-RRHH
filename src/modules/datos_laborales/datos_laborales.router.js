const express = require('express')
const { show, list, register, destroy, update, down } = require('./controllers/datos_laborales.controllers')
const { schemaValidator } = require('../../middlewares/validator')
const { uuid, dato_laboral, dato_laboral_baja } = require('../../database/schemas/datos_laborales')

const router = express.Router()

router.get('/', list)
router.get('/:id', schemaValidator(uuid), show)
router.post('/', schemaValidator(dato_laboral), register)
router.put('/:id', schemaValidator(dato_laboral), update)
router.delete('/:id', schemaValidator(uuid), destroy)
router.put('/baja/:id', schemaValidator(dato_laboral_baja), down)

module.exports = router
