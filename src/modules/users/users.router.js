const express = require('express')
const { show, list, destroy } = require('./controllers/users.controllers')

const router = express.Router()

router.get('/:id', show)
router.get('/', list)
router.delete('/:id', destroy)

module.exports = router