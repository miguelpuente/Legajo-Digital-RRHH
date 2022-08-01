const express = require('express')
const { show, list, register, destroy, update } = require('./controllers/sectores.controllers')
const { schemaValidator } = require('../../middlewares/validator')
const { uuid, sector } = require('../../database/schemas/sectores')

const router = express.Router()

router.get('/', list)
router.get('/:id', schemaValidator(uuid), show)
router.post('/', schemaValidator(sector), register)
router.put('/:id', schemaValidator(sector), update)
router.delete('/:id', schemaValidator(uuid), destroy)

module.exports = router
