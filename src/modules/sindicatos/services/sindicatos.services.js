const { ErrorObject } = require('../../../helpers/error')
const { Sindicato } = require('../../../database/models')

exports.getAllSindicatos = async () => {
  const sindicatos = await Sindicato.findAll(  )
  return sindicatos
}

exports.getSindicatoByPk = async (id) => {
  try {
    const sindicato = await Sindicato.findByPk( id )
    if (sindicato) {
      return sindicato
    } else {
      throw new ErrorObject('Sindicato no existe', 404)
    }
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.createSindicato = async (body) => {
  try {
      const newSindicato = await Sindicato.create(body)
      if (!newSindicato) {
        throw new ErrorObject('Falló registro de Sindicato', 404)
      }
      return newSindicato
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.updateSindicatoById = async (req) => {
  try {
    const { id } = req.params
    const { nombre, activo, } = req.body
    if (nombre.length<3) {
      throw new ErrorObject('Nombre debe ser más largo', 404)
    }
    const sindicato = await Sindicato.findByPk(id)
    if (sindicato) {
      await Sindicato.update({ nombre, activo, },{ where: { id: sindicato.id } },)
      const newSindicato = await Sindicato.findByPk(sindicato.id)
      return newSindicato
    } else {
      throw new ErrorObject('Sindicato no existe', 404)
    }
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.destroySindicato = async (id) => {
  try {
    const sindicato = await Sindicato.findByPk(id)
    if (sindicato) {
      await Sindicato.destroy({ where: { id: sindicato.id } })
    } else {
      throw new ErrorObject('Puesto no existe', 404)
    }
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
