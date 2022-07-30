const express = require('express')
const auth = require('./auth/router/auth')
const users = require('./users/users.router')
const empresas = require('./empresas/empresas.router')
const areas = require('./areas/areas.router')
const sucursales = require('./sucursales/sucursales.router')

const router = express.Router()

router.use('/auth', auth)
router.use('/users', users)
router.use('/empresas', empresas)
router.use('/areas', areas)
router.use('/sucursales', sucursales)

module.exports = router