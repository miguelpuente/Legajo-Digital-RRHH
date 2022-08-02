const { ErrorObject } = require('../../../helpers/error')
const { Relaciones_Familiar } = require('../../../database/models')

exports.getAllRelaciones_Familiares = async () => {
  const relacion_familiar = await Relaciones_Familiar.findAll()
  return relacion_familiar
}

exports.getRelacion_FamiliarByPk = async (id) => {
  try {
    const relacion_familiar = await Relaciones_Familiar.findByPk( id )
    if (relacion_familiar) {
      return relacion_familiar
    } else {
      throw new ErrorObject('Relacion familiar no existe', 404)
    }
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.createRelacion_Familiar = async (body) => {
  try {
      const newRelacion_familiar = await Relaciones_Familiar.create(body)
      if (!newRelacion_familiar) {
        throw new ErrorObject('Falló registro de relacion familiar', 404)
      }
      return newRelacion_familiar
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.updateRelacion_FamiliarById = async (req) => {
  try {
    const { id } = req.params
    const { nombre, activo, } = req.body
    if (nombre.length<3) {
      throw new ErrorObject('Nombre debe ser más largo', 404)
    }
    const relacion_familiar = await Relaciones_Familiar.findByPk(id)
    if (relacion_familiar) {
      await Relaciones_Familiar.update({ nombre, activo, },{ where: { id: relacion_familiar.id } },)
      const newRelacion_familiar = await Relaciones_Familiar.findByPk(id)
      return newRelacion_familiar
    } else {
      throw new ErrorObject('Relacion familiar no existe', 404)
    }
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

exports.destroyRelacion_Familiar = async (id) => {
  try {
    const relacion_familiar = await Relaciones_Familiar.findByPk(id)
    if (relacion_familiar) {
      await Relaciones_Familiar.destroy({ where: { id: relacion_familiar.id } })
    } else {
      throw new ErrorObject('Relacion familiar no existe', 404)
    }
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}
