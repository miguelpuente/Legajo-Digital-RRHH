const express = require('express')
const { show, list, register, destroy, update } = require('./controllers/sindicatos.controllers')
const { schemaValidator } = require('../../middlewares/validator')
const { uuid, sindicato } = require('../../database/schemas/sindicatos')

const router = express.Router()

router.get('/', list)
router.get('/:id', schemaValidator(uuid), show)
router.post('/', schemaValidator(sindicato), register)
router.put('/:id', schemaValidator(sindicato), update)
router.delete('/:id', schemaValidator(uuid), destroy)

module.exports = router
