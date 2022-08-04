const express = require('express')
const { show, list, register, destroy, update } = require('./controllers/licencias_tipos.controllers')
const { schemaValidator } = require('../../middlewares/validator')
const { uuid, licencia_tipo } = require('../../database/schemas/licencias_tipos')

const router = express.Router()

router.get('/', list)
router.get('/:id', schemaValidator(uuid), show)
router.post('/', schemaValidator(licencia_tipo), register)
router.put('/:id', schemaValidator(licencia_tipo), update)
router.delete('/:id', schemaValidator(uuid), destroy)

module.exports = router
