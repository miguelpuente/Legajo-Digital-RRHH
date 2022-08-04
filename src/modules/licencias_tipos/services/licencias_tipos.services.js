const { ErrorObject } = require('../../../helpers/error')
const { Licencia_tipo } = require('../../../database/models')

exports.getAllLicencias_tipos = async () => {
  const licencias_tipos = await Licencia_tipo.findAll()
  return licencias_tipos
}

exports.getLicencia_tipoByPk = async (id) => {
  try {
    const licencia_tipo = await Licencia_tipo.findByPk( id )
    if (licencia_tipo) {
      return licencia_tipo
    } else {
      throw new ErrorObject('Licencia tipo no existe', 404)
    }
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.createLicencia_tipo = async (body) => {
  try {
      const newLicencia_tipo = await Licencia_tipo.create(body)
      if (!newLicencia_tipo) {
        throw new ErrorObject('Falló registro de licencia_tipo', 404)
      }
      return newLicencia_tipo
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.updateLicencia_tipoById = async (req) => {
  try {
    const { id } = req.params
    const { nombre, icono_img, icono_color, observaciones, activo, } = req.body
    if (nombre.length<3) {
      throw new ErrorObject('Nombre debe ser más largo', 404)
    }
    const licencia_tipo = await Licencia_tipo.findByPk(id)
    if (licencia_tipo) {
      await Licencia_tipo.update({ nombre, icono_img, icono_color, observaciones, activo, },{ where: { id: licencia_tipo.id } },)
      const newLicencia_tipo = await Licencia_tipo.findByPk(id)
      return newLicencia_tipo
    } else {
      throw new ErrorObject('Licencia tipo no existe', 404)
    }
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.destroyLicencia_tipo = async (id) => {
  try {
    const licencia_tipo = await Licencia_tipo.findByPk(id)
    if (licencia_tipo) {
      await Licencia_tipo.destroy({ where: { id: licencia_tipo.id } })
    } else {
      throw new ErrorObject('Licencia_tipo no existe', 404)
    }
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
