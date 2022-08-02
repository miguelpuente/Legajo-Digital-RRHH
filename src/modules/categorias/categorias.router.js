const express = require('express')
const { show, list, register, destroy, update } = require('./controllers/categorias.controllers')
const { schemaValidator } = require('../../middlewares/validator')
const { uuid, categoria } = require('../../database/schemas/categorias')

const router = express.Router()

router.get('/', list)
router.get('/:id', schemaValidator(uuid), show)
router.post('/', schemaValidator(categoria), register)
router.put('/:id', schemaValidator(categoria), update)
router.delete('/:id', schemaValidator(uuid), destroy)

module.exports = router