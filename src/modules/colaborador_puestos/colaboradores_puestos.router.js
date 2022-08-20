const express = require('express')
const { showPuestosxColaborador, show, list, register, destroy, update, bajaColaboradorPuesto } = require('./controllers/colaboradores_puestos.controllers')
const { schemaValidator } = require('../../middlewares/validator')
const { uuid, colaborador_puesto, baja } = require('../../database/schemas/colaboradores_puestos')

const router = express.Router()

router.get('/', list)
router.get('/:id', schemaValidator(uuid), show)
router.get('/colaborador/:id', schemaValidator(uuid), showPuestosxColaborador)
router.post('/', schemaValidator(colaborador_puesto), register)
router.put('/:id', schemaValidator(colaborador_puesto), update)
router.put('/baja', schemaValidator(baja), bajaColaboradorPuesto)
router.delete('/:id', schemaValidator(uuid), destroy)

module.exports = router
