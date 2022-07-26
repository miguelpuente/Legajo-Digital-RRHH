const express = require('express')
const { destroy } = require('./controllers/users.controllers')

const router = express.Router()

router.delete('/:id', destroy)

module.exports = router