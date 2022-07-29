const express = require('express')
const { show, list, destroy } = require('./controllers/users.controllers')
const { schemaValidator } = require('../../middlewares/validator')
const { uuid } = require('../../database/schemas/users')

const router = express.Router()

router.get('/', list)
router.get('/:id', schemaValidator(uuid), show)
router.delete('/:id', schemaValidator(uuid), destroy)

module.exports = router