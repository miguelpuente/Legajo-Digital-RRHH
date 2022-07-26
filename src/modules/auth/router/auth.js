const express = require('express')
const { register, login } = require('../../users/controllers/users.controllers')
const { schemaValidator } = require('../../../middlewares/validator')
const { userRegister, userLogin } = require('../../../database/schemas/users')

const router = express.Router()

router.post('/register', schemaValidator(userRegister), register)
router.post('/login', schemaValidator(userLogin), login)

module.exports = router
