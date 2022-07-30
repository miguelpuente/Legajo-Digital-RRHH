const express = require('express')
const { show, list, register, destroy, update } = require('./controllers/areas.controllers')
const { schemaValidator } = require('../../middlewares/validator')
const { uuid, area } = require('../../database/schemas/areas')

const router = express.Router()

router.get('/', list)
router.get('/:id', schemaValidator(uuid), show)
router.post('/', schemaValidator(area), register)
router.put('/:id', schemaValidator(area), update)
router.delete('/:id', schemaValidator(uuid), destroy)

module.exports = router