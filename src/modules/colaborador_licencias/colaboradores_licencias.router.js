const express = require('express')
const { show, list, register, destroy, update } = require('./controllers/colaboradores_licencias.controllers')
const { schemaValidator } = require('../../middlewares/validator')
const { uuid, colaborador_licencia } = require('../../database/schemas/colaboradores_licencias')

const router = express.Router()

router.get('/', list)
router.get('/:id', schemaValidator(uuid), show)
router.post('/', schemaValidator(colaborador_licencia), register)
router.put('/:id', schemaValidator(colaborador_licencia), update)
router.delete('/:id', schemaValidator(uuid), destroy)

module.exports = router