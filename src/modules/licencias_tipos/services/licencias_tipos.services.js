const { ErrorObject } = require('../../../helpers/error')
const { Licencia_tipo } = require('../../../database/models')

exports.getAllLicencias_tipos = async () => {
  return await Licencia_tipo.findAll()
}

exports.getLicencia_tipoByPk = async (id) => {
  try {
    const licencia_tipo = await Licencia_tipo.findByPk( id )
    if (licencia_tipo) return licencia_tipo
    throw new ErrorObject('Licencia tipo no existe', 404)
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.createLicencia_tipo = async (body) => {
  try {
      const newLicencia_tipo = await Licencia_tipo.create(body)
      if (newLicencia_tipo) return newLicencia_tipo
      throw new ErrorObject('Falló registro de licencia_tipo', 404)
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.updateLicencia_tipoById = async (req) => {
  try {
    const { id } = req.params
    const { nombre, icono_img, icono_color, observaciones, activo, } = req.body
    if (nombre.length<3) throw new ErrorObject('Nombre debe ser más largo', 404)
    const licencia_tipo = await Licencia_tipo.findByPk(id)
    if (licencia_tipo) {
      await Licencia_tipo.update({ nombre, icono_img, icono_color, observaciones, activo, },{ where: { id: licencia_tipo.id } },)
      return await Licencia_tipo.findByPk(id)
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
    if (licencia_tipo) return await Licencia_tipo.destroy({ where: { id: licencia_tipo.id } })
    throw new ErrorObject('Licencia_tipo no existe', 404)
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
