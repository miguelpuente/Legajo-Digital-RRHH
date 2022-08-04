const express = require('express')
const { show, list, register, destroy, update } = require('./controllers/motivos_inactividades.controllers')
const { schemaValidator } = require('../../middlewares/validator')
const { uuid, motivo_inactividad } = require('../../database/schemas/motivos_inactividades')

const router = express.Router()

router.get('/', list)
router.get('/:id', schemaValidator(uuid), show)
router.post('/', schemaValidator(motivo_inactividad), register)
router.put('/:id', schemaValidator(motivo_inactividad), update)
router.delete('/:id', schemaValidator(uuid), destroy)

module.exports = router