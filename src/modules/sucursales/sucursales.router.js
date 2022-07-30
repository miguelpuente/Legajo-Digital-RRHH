const express = require('express')
const { show, list, register, destroy, update } = require('./controllers/sucursales.controllers')
const { schemaValidator } = require('../../middlewares/validator')
const { uuid, sucursal } = require('../../database/schemas/sucursales')

const router = express.Router()

router.get('/', list)
router.get('/:id', schemaValidator(uuid), show)
router.post('/', schemaValidator(sucursal), register)
router.put('/:id', schemaValidator(sucursal), update)
router.delete('/:id', schemaValidator(uuid), destroy)

module.exports = router