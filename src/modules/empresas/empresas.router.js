const express = require('express')
const { show, list, register, destroy, update } = require('./controllers/empresas.controllers')
const { schemaValidator } = require('../../middlewares/validator')
const { empresa } = require('../../database/schemas/empresas')

const router = express.Router()

router.get('/', list)
router.get('/:id', show)
router.post('/', schemaValidator(empresa), register)
router.put('/:id', schemaValidator(empresa), update)
router.delete('/:id', destroy)

module.exports = router