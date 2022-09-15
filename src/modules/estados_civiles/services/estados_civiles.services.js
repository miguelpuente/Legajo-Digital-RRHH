const { ErrorObject } = require('../../../helpers/error')
const { Estados_Civil } = require('../../../database/models')

exports.getAllEstados_Civiles = async () => {
  const estados_civiles = await Estados_Civil.findAll()
  return estados_civiles
}

exports.getEstado_CivilByPk = async (id) => {
  try {
    const estado_civil = await Estados_Civil.findByPk( id )
    if (estado_civil) return estado_civil
    throw new ErrorObject('Estado Civil no existe', 404)
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.createEstado_Civil = async (body) => {
  try {
      const newEstados_Civil = await Estados_Civil.create(body)
      if (newEstados_Civil) return newEstados_Civil
      throw new ErrorObject('Falló registro de estado civil', 404)

  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.updateEstado_CivilById = async (req) => {
  try {
    const { id } = req.params
    const { nombre, activo, } = req.body
    if (nombre.length<3) {
      throw new ErrorObject('Nombre debe ser más largo', 404)
    }
    const estado_civil = await Estados_Civil.findByPk(id)
    if (estado_civil) {
      await Estados_Civil.update({ nombre, activo, },{ where: { id: estado_civil.id } },)
      return await Estados_Civil.findByPk(id)
    } else {
      throw new ErrorObject('Estado Civil no existe', 404)
    }
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.destroyEstado_Civil = async (id) => {
  try {
    const estado_civil = await Estados_Civil.findByPk(id)
    if (estado_civil) return await Estados_Civil.destroy({ where: { id: estado_civil.id } })
    throw new ErrorObject('Estado Civil no existe', 404)
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
