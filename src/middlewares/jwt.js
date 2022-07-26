const jwt = require('jsonwebtoken')
const config = require('../config/config')

const generateToken = (user) => new Promise((resolve, reject) => {
  jwt.sign({ user }, config.development.keyJWT, {expiresIn: '4h'}, (err, token) => {
    if (err) {
      reject(err)
    } else {
      resolve(token)
    }
  })
})

const decodeToken = (token) => {
  try {
    const { user } = jwt.verify(token, config.development.keyJWT)
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