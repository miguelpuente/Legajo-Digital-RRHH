const express = require('express')
const { show, list, register, destroy, update } = require('./controllers/colaboradores.controllers')
const { schemaValidator } = require('../../middlewares/validator')
const { uuid, colaborador } = require('../../database/schemas/colaboradores')

const router = express.Router()

router.get('/', list)
router.get('/:id', schemaValidator(uuid), show)
router.post('/', schemaValidator(colaborador), register)
router.put('/:id', schemaValidator(colaborador), update)
router.delete('/:id', schemaValidator(uuid), destroy)

module.exports = router
