const express = require('express')
const { show, list, register, destroy, update, registerEmpresaSindicato, getEmpresaSindicato, destroyEmpresaSindicato } = require('./controllers/empresas.controllers')
const { schemaValidator } = require('../../middlewares/validator')
const { uuid, empresa, empresaUpdate } = require('../../database/schemas/empresas')

const router = express.Router()

router.get('/', list)
router.get('/:id', schemaValidator(uuid), show)
router.post('/:empresa_id/:sindicato_id', registerEmpresaSindicato)
router.get('/:empresa_id/sindicatos', getEmpresaSindicato)
router.delete('/:empresa_id/:sindicato_id',destroyEmpresaSindicato)
router.post('/', schemaValidator(empresa), register)
router.put('/:id', schemaValidator(empresaUpdate), update)
router.delete('/:id', schemaValidator(uuid), destroy)

module.exports = router
