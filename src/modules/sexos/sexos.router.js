const express = require('express')
const { show, list, register, destroy, update } = require('./controllers/sexos.controllers')
const { schemaValidator } = require('../../middlewares/validator')
const { uuid, sexo } = require('../../database/schemas/sexos')

const router = express.Router()

router.get('/', list)
router.get('/:id', schemaValidator(uuid), show)
router.post('/', schemaValidator(sexo), register)
router.put('/:id', schemaValidator(sexo), update)
router.delete('/:id', schemaValidator(uuid), destroy)

module.exports = router