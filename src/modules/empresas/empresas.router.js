const express = require('express')
const { show, list, register, destroy, update } = require('./controllers/empresas.controllers')
const { schemaValidator } = require('../../middlewares/validator')
const { uuid, empresa, empresaUpdate } = require('../../database/schemas/empresas')

const router = express.Router()

router.get('/', list)
router.get('/:id', schemaValidator(uuid), show)
router.post('/', schemaValidator(empresa), register)
router.put('/:id', schemaValidator(empresaUpdate), update)
router.delete('/:id', schemaValidator(uuid), destroy)

module.exports = router