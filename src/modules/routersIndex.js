const express = require('express')
const auth = require('./auth/router/auth')
const users = require('./users/users.router')
const empresas = require('./empresas/empresas.router')

const router = express.Router()

router.use('/auth', auth)
router.use('/users', users)
router.use('/empresas', empresas)


module.exports = router