const bcrypt = require('bcrypt')
const { ErrorObject } = require('../../../helpers/error')
const { Users } = require('../../../database/models')
const { generateToken} = require('../../../helpers/jwt')

exports.getAllUsers = async () => {
  const users = await Users.findAll({
    attributes: ['id', 'email', 'avatar'],
  })
  return users
}

exports.getUserByPk = async (id) => {
  try {
    const user = await Users.findByPk( id, {
      attributes: ['id', 'email', 'avatar']
    })
    return user
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.getUserByEmail = async (email) => {
  try {
    const user = await Users.findOne({ where: { email } })
    return user
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.getPassword = (myPlaintextPassword, hash) => {
  try {
    return bcrypt.compareSync(myPlaintextPassword, hash)
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.createUser = async (body) => {
  try {
    const existeUser = await this.getUserByEmail(body.email)
    if (existeUser) {
      throw new ErrorObject('Email ya fue registrado', 404)
    }
    const hashedPassword = await bcrypt.hash(body.password, 10)
    body.password = hashedPassword
    const newUser = await Users.create(body)
    if (!newUser) {
      throw new ErrorObject('Falló registro de usuario', 404)
    }
    const token = await generateToken(newUser)
    return ({Authorization: token})
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.createLogin = async (email, password) => {
  try {
    const user = await this.getUserByEmail(email)
    if (user) {
      const hash = user.password
      const login = this.getPassword(password, hash)
      if (login) {
        const token = await generateToken(user)
        return ({Authorization: token})
      }
    }
    return null
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.destroyUser = async (id) => {
  try {
    const user = await Users.findByPk(id)
    if (user) {
      await Users.destroy({ where: { id: user.id } })
    } else {
      throw new ErrorObject('Usuario no existe', 404)
    }
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
