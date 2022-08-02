const express = require('express')
const { show, list, register, destroy, update } = require('./controllers/relaciones_familiares.controllers')
const { schemaValidator } = require('../../middlewares/validator')
const { uuid, relacion_familiar } = require('../../database/schemas/relaciones_familiares')

const router = express.Router()

router.get('/', list)
router.get('/:id', schemaValidator(uuid), show)
router.post('/', schemaValidator(relacion_familiar), register)
router.put('/:id', schemaValidator(relacion_familiar), update)
router.delete('/:id', schemaValidator(uuid), destroy)

module.exports = router