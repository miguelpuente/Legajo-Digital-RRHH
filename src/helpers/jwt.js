const jwt = require('jsonwebtoken')
const env = process.env.NODE_ENV || 'development'
const config = require('../config/config')[env]

const generateToken = (user) => new Promise((resolve, reject) => {
  jwt.sign({ user }, config.keyJWT, {expiresIn: '4h'}, (err, token) => {
    if (err) {
      reject(err)
    } else {
      resolve(token)
    }
  })
})

const decodeToken = (token) => {
  try {
    const { user } = jwt.verify(token, config.keyJWT)
    return user
  } catch (error) {
    return error
  }
}

const verifyToken = (token) => {
  try{
    const { user } = decodeToken(token)
    if (!user) {
      return false
    }
    return true
  } catch (error) {
    return error
  }
}

module.exports = {
  generateToken,
  decodeToken,
  verifyToken
}