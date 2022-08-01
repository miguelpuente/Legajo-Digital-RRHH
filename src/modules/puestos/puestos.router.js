const express = require('express')
const { show, list, register, destroy, update } = require('./controllers/puestos.controllers')
const { schemaValidator } = require('../../middlewares/validator')
const { uuid, puesto } = require('../../database/schemas/puestos')

const router = express.Router()

router.get('/', list)
router.get('/:id', schemaValidator(uuid), show)
router.post('/', schemaValidator(puesto), register)
router.put('/:id', schemaValidator(puesto), update)
router.delete('/:id', schemaValidator(uuid), destroy)

module.exports = router