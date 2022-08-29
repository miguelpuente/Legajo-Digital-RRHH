const express = require('express')
const { show, list, register, destroy, update } = require('./controllers/reemplazos.controllers')
const { schemaValidator } = require('../../middlewares/validator')
const { uuid, reemplazo } = require('../../database/schemas/reemplazos')

const router = express.Router()

router.get('/', list)
router.get('/:id', schemaValidator(uuid), show)
router.post('/', schemaValidator(reemplazo), register)
router.put('/:id', schemaValidator(reemplazo), update)
router.delete('/:id', schemaValidator(uuid), destroy)

module.exports = router
