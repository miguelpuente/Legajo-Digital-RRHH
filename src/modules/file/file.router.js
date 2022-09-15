const express = require('express')
const { up, down } = require('./controllers/file.controllers')

const router = express.Router()

router.get('/:tipo/:id/:tabla', down)
router.post('/:tipo/:id/:tabla', up)

module.exports = router
