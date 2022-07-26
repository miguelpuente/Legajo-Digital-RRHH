const express = require('express')
const auth = require('./auth/router/auth')
const users = require('./users/users.router')
const perfiles = require('./perfiles/perfiles.router')

const router = express.Router()

router.use('/auth', auth)
router.use('/users', users)
router.use('/perfiles', perfiles)

module.exports = router