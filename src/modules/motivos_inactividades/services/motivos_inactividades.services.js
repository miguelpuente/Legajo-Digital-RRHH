const { ErrorObject } = require('../../../helpers/error')
const { Motivos_Inactividad } = require('../../../database/models')

exports.getAllMotivos_Inactividades = async () => {
  const motivos_inactividad = await Motivos_Inactividad.findAll()
  return motivos_inactividad
}

exports.getMotivo_InactividadByPk = async (id) => {
  try {
    const motivo_inactividad = await Motivos_Inactividad.findByPk( id )
    if (motivo_inactividad) {
      return motivo_inactividad
    } else {
      throw new ErrorObject('Motivo inactividad no existe', 404)
    }
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.createMotivos_Inactividad = async (body) => {
  try {
      const newMotivo_inactividad = await Motivos_Inactividad.create(body)
      if (!newMotivo_inactividad) {
        throw new ErrorObject('Falló registro de motivo inactividad', 404)
      }
      return newMotivo_inactividad
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.updateMotivo_InactividadById = async (req) => {
  try {
    const { id } = req.params
    const { nombre, observaciones, activo, } = req.body
    if (nombre.length<3) {
      throw new ErrorObject('Motivo inactividad debe ser más largo', 404)
    }
    const motivo_inactividad = await Motivos_Inactividad.findByPk(id)
    if (motivo_inactividad) {
      await Motivos_Inactividad.update({ nombre, observaciones, activo, },{ where: { id: motivo_inactividad.id } },)
      const newMotivo_inactividad = await Motivos_Inactividad.findByPk(id)
      return newMotivo_inactividad
    } else {
      throw new ErrorObject('Motivo inactividad no existe', 404)
    }
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.destroyMotivo_Inactividad = async (id) => {
  try {
    const motivo_inactividad = await Motivos_Inactividad.findByPk(id)
    if (motivo_inactividad) {
      await Motivos_Inactividad.destroy({ where: { id: motivo_inactividad.id } })
    } else {
      throw new ErrorObject('Area no existe', 404)
    }
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
