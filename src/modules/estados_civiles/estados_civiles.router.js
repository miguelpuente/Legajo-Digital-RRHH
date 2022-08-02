const express = require('express')
const { show, list, register, destroy, update } = require('./controllers/estados_civiles.controllers')
const { schemaValidator } = require('../../middlewares/validator')
const { uuid, estado_civil } = require('../../database/schemas/estados_civiles')

const router = express.Router()

router.get('/', list)
router.get('/:id', schemaValidator(uuid), show)
router.post('/', schemaValidator(estado_civil), register)
router.put('/:id', schemaValidator(estado_civil), update)
router.delete('/:id', schemaValidator(uuid), destroy)

module.exports = router