const express = require('express')
const auth = require('./auth/router/auth')
const users = require('./users/users.router')
const empresas = require('./empresas/empresas.router')
const areas = require('./areas/areas.router')
const sucursales = require('./sucursales/sucursales.router')
const sectores = require('./sectores/sectores.router')
const puestos = require('./puestos/puestos.router')

const router = express.Router()

router.use('/auth', auth)
router.use('/users', users)
router.use('/empresas', empresas)
router.use('/areas', areas)
router.use('/sucursales', sucursales)
router.use('/sectores', sectores)
router.use('/puestos', puestos)

module.exports = router