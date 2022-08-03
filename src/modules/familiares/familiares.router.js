const express = require('express')
const { show, list, register, destroy, update } = require('./controllers/familiares.controllers')
const { schemaValidator } = require('../../middlewares/validator')
const { uuid, familiar } = require('../../database/schemas/familiares')

const router = express.Router()

router.get('/', list)
router.get('/:id', schemaValidator(uuid), show)
router.post('/', schemaValidator(familiar), register)
router.put('/:id', schemaValidator(familiar), update)
router.delete('/:id', schemaValidator(uuid), destroy)

module.exports = router